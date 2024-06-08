const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey welocme to crud app");
})
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({ name: "prince", age: 25, email: "princekumarg@gmail.com" })
    res.send(createduser);
})
app.get('/read', async (req, res) => {
    let users = await userModel.find();//findone give one data
    res.send(users);
})
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ name: "John" }, { name: "John Doe" }, { new: true });
    res.send(updatedUser);
})
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ name: "John Doe" });
    res.send(deletedUser);
})

app.listen(3000);