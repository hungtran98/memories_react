const petsRouter = require('./pets')
const authRouter = require('./auth')
const postRouter = require('./post')
// const cors = require('cors')

// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

function route(app) {
    app.use('/posts',postRouter)
    app.use('/pokemon', petsRouter)
    app.use('/', authRouter)
}

module.exports= route