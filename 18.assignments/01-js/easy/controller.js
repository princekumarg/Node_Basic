const prisma = require('../prisma');
const cookieToken = require('../utils/cookieToken');
const { userSchema, postSchema } = require('../schemas'); // Assuming your Zod schemas are in a file named schemas.js
// User signup
exports.signup = async (req, res, next) => {
    try {
        const parsedData = userSchema.omit({ id: true, posts: true }).parse(req.body);

        const { name, email, password } = parsedData;

        const user = await prisma.user.create({
            data: {
                name, email, password,
            }
        });
        cookieToken(res, user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// User login
exports.login = async (req, res, next) => {
    try {
        // Validate the incoming data against a subset of the user schema
        const parsedData = userSchema.pick({ email: true, password: true }).parse(req.body);
        const { email, password } = parsedData;
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Password is incorrect' });
        }

        cookieToken(res, user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// User logout
exports.logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
// Create post
exports.createPost = async (req, res, next) => {
    try {
        // Validate the incoming data against the post schema
        const parsedData = postSchema.omit({ id: true }).parse(req.body);
        const { slug, title, body, authorId } = parsedData;
        const result = await prisma.post.create({
            data: {
                slug, title, body,
                author: { connect: { id: authorId } }
            }
        });
        res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// Update a post
exports.updatePost = async (req, res, next) => {
    try {
        // Validate the incoming data against a partial post schema
        const parsedData = postSchema.pick({ title: true, body: true }).partial().parse(req.body);
        const { id } = req.params;
        const result = await prisma.post.update({
            where: { id }, data: parsedData
        });
        res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// Delete a post
exports.deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await prisma.post.delete({
            where: { id }
        });
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
// Get all posts
exports.getAllPost = async (req, res, next) => {
    try {
        const result = await prisma.post.findMany();
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
// Get a post by ID
exports.getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await prisma.post.findUnique({
            where: { id }
        });
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};