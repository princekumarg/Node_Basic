const prisma = require('../prisma')
const cookieToken = require('../utils/cookieToken')

//user signup
exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        //check
        if (!name || !email || !password) {
            throw new Error('Please provide all fields');
        }
        //create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })
        //send user a token
        cookieToken(res, user);
    } catch (error) {
        throw new Error(error);
    }
}
//user login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //check
        if (!email || !password) {
            throw new Error('Please provide all fields');
        }
        //find a user with email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error('Invalid credentials')
        }
        if (user.password !== password) {
            throw new Error('Password is incorrect')
        }
        //user is there and validation
        cookieToken(res, user);
    } catch (error) {
        throw new Error(error)
    }
}
//user logout
exports.logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        throw new Error(error)
    }
}