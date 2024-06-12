const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
})
app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createuser = await userModel.create({
                username, email, password: hash, age
            })
            let token = jwt.sign({ email }, "secret");
            res.cookie("token", token);
            res.send(createuser);
        })
    })

})
app.get('/login', async (req, res) => {
    res.render('login');
})
app.post('/login', async (req, res) => {
    let loginuser = await userModel.findOne({ email: req.body.email });
    if (!loginuser) {
        return res.status(400).send("User not found");
    }
    bcrypt.compare(req.body.password, loginuser.password, (err, result) => {
        if (!result) {
            return res.status(400).send("Invalid password");
        }
        let token = jwt.sign({ email: loginuser.email }, "secret");
        res.cookie("token", token);
        res.send("Logged in successfully");
    })
})
app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
})

app.listen(3000);