const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.SERVER_PORT
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})
