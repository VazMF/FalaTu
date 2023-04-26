const users = []
const database = require('../../config/config')

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return reject(new Error('Informe uma sala e um nome de usuário!'))
    }

    const existingUser = users.find((user) => user.room === room && user.username === username)

    if (existingUser) {
        return reject(new Error('Esse nome já está sendo usado.'))
    }

    const userInsertQuery = 'INSERT INTO user (username, password) VALUES (?, ?)'
    const userInsertValues = [username, '123']

    const roomInsertQuery = 'INSERT INTO room (name) VALUES (?)'
    const roomInsertValues = [room]

    const user = { id, username, room }

    database.query(userInsertQuery, userInsertValues, (error, result) => {
        if (error) {
            return reject(error)
        }
    })

    database.query(roomInsertQuery, roomInsertValues, (error, result) => {
        if (error) {
            return reject(error)
        }
    })

    console.log(user);
    users.push(user)
    return { user }
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