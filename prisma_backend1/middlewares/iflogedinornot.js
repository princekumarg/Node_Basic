const prisma = require('../prisma/index')
const jwt = require('jsonwebtoken')
const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.send('Please login first')
            throw new Error('You are not logged in')
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await prisma.user.findUnique({
            where: {
                id: decode.userId
            }
        })
        //you can do more checks
        next();

    } catch (error) {
        throw new Error(error)
    }
}
module.exports = isLoggedIn;