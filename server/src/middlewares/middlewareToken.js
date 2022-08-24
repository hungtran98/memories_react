const jwt = require('jsonwebtoken')

const middlewareToken = {
    
    confirmToken: (req, res, next ) => {
        const authToken = req.headers['authorization']
        // const authToken = req.headers.Authorization
        //Bearer Token

        if(authToken){
            const token = authToken.split(' ')[1]
            // if(token == null) return res.status(401).json('null token')
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(403).json('token invalid !!!')

                // req.user = user 
                next()

        
            })
        }

     
        
    }


}



module.exports = middlewareToken