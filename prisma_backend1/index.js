const cookieParser = require('cookie-parser');
const express = require('express');
require('dotenv').config();
const app = express();
//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookie parser middleware
app.use(cookieParser());
//routes
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
app.use('/api', userRouter);
app.use('/api', postRouter)
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})
//still datbase is not connected