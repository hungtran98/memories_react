const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const db =  require('./src/config/db')
const route = require('./src/routes')



dotenv.config()
//connect database
db.connection()

const app = express()
const port = 3001
app.use(morgan('combined'))

app.use(cors())

 
//-----middleware
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//--------------


route(app)

//console.log(process.env.ACCESS_TOKEN_SECRET);
app.listen(port, () => { console.log(`listening on port ${port}`);})

