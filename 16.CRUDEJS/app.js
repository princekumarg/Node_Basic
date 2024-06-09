const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render('read', { users });
})
app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read');
})
app.get('/edit/:usersid', async (req, res) => {
    let users = await userModel.findOne({ _id: req.params.usersid });
    res.render('edit', { users });
})
app.post('/update/:usersid', async (req, res) => {
    let { name, email, imageurl } = req.body;
    let users = await userModel.findOneAndUpdate({ _id: req.params.usersid }, { name, email, imageurl }, { new: true });
    res.redirect('/read');
})
app.post('/create', async (req, res) => {
    let { name, email, imageurl } = req.body;

    let createdUser = await userModel.create({
        name: name,
        email: email,
        imageurl: imageurl
    });
    res.redirect('/read');
})

app.listen(3000);