import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

dotenv.config()

const app = express();

app.use(bodyParser.json())

app.use('/', usersRoutes)
 // Tutte le rotte collegate all'utente andranno sotto il percorso '/'

 app.get('/', (req, res) => {
    console.log('Ciao')
    res.send('Ciao Home')
 })

 app.listen(process.env.PORT, () => {
    console.log('server running on port 5001')
 })
