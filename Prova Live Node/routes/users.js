import express from "express";
import {v4 as uuid4} from 'uuid';

const router = express.Router()

let users = [{
    firstname: 'Marco',
    lastname: 'Node',
    age: 25
}]

router.get('/', (req, res) => {
    res.send(users);
})

// Funzione di "get all" (funzione esterna)

router.post('/', (req, res) => {
    const user = req.body
    users.push({...user, id: uuid4()})
    res.send('new user')
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const singleUser = users.find(user => user.id === id)
    console.log(singleUser)
    res.send('sigleUser')
})

router.delete(':id', (req, res) => {
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send('id deleted')
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const {firstname, lastname, age} = req.body
    const user = users.find(user => user.id === id)

    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(age) user.age = age

    res.send('id updated')
})

export default router
