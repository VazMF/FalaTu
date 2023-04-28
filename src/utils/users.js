const users = []
const database = require('../../config/config')
const bcrypt = require('bcryptjs')

const addUser = ({ id, username, password, room }, callback) => {
    username = username.trim().toLowerCase()
    password = password.trim()
    room = room.trim().toLowerCase()

    if (!username || !room || !password) {
        return callback('Informe uma sala e um nome de usuário!')
    }

    const hash_password = bcrypt.hashSync(password, 10)

    database.query('SELECT * FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            return callback(error)
        }

        if (results.length > 0) {
            const existingUser = results[0]
            const user = { id: id, username: existingUser.username, password: existingUser.password, room }

            const passwordMatch = bcrypt.compareSync(password, existingUser.password);
            if (passwordMatch === false) {
                return callback('Senha incorreta');
            } else {
                users.push(user)
            }

            database.query('INSERT INTO room (name) VALUES (?)', [room], (error, result) => {
                if (error) {
                    return callback(error)
                }

                const roomId = result.insertId

                database.query('INSERT INTO user_room (user_id_fk, room_id_fk) VALUES (?, ?)', [existingUser.id, roomId], (error, result) => {
                    if (error) {
                        return callback(error)
                    }
                })
            })
            return callback(null, { user })
        } else {
            database.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, hash_password], (error, newUser) => {
                if (error) {
                    return callback(error)
                }

                const userId = newUser.insertId
                const user = { id, username: username, password: bcrypt.hashSync(password, 10), room: room }
                users.push(user)
                callback(null, { user })

                database.query('INSERT INTO room (name) VALUES (?)', [room], (error, result) => {
                    if (error) {
                        return callback(error)
                    }

                    const roomId = result.insertId

                    database.query('INSERT INTO user_room (user_id_fk, room_id_fk) VALUES (?, ?)', [userId, roomId], (error, result) => {
                        if (error) {
                            return callback(error)
                        }
                    })
                })
            })
        }
    })
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id == id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}