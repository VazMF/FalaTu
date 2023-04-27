const users = []
const database = require('../../config/config')
const bcrypt = require('bcryptjs')

const addUser = ({ id, username, password, room }) => {
    username = username.trim().toLowerCase()
    password = password.trim()
    room = room.trim().toLowerCase()

    if (!username || !room || !password) {
        return {
            error: 'Informe uma sala e um nome de usuário!'
        }
    }

    const hash_password = bcrypt.hashSync(password, 10)
    const user = { id, username, hash_password, room }
    
    database.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, hash_password], (error, result) => {
        if (error) {
            return error
        }
    })

    database.query('INSERT INTO room (name) VALUES (?)', [room], (error, result) => {
        if (error) {
            return error
        }
    })

    database.query('SELECT id FROM user WHERE username = ?', [username], (error, result) => {
        let userId = 0
        if (error) throw error;

        if (result.length > 0) {
            userId = result[0].id
        } else {
            console.log('Usuário não encontrado.');
        }

        let roomId = 0
        database.query('SELECT id FROM room WHERE name = ?', [room], (error, result) => {
            if (error) throw error;

            if (result.length > 0) {
                roomId = result[0].id
            } else {
                console.log('Sala não encontrada.');
            }

            database.query('INSERT INTO user_room (user_id_fk, room_id_fk) VALUES (?, ?)', [userId, roomId], (error, result) => {
                if (error) throw error;
            })
        })
    })
    users.push(user)
    return { user, password }
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