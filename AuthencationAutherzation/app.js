const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(cookieParser());

app.get("/", function (req, res) {
    // res.cookie("name", "prince");
    // res.send("Cookie has been set");
    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash("poladera", salt, function (err, hash) {
    //         console.log(hash)
    //     });
    // });
    // bcrypt.compare("poladera", "$2b$10$BXVcvFfmnOg/nQw9c5lIH.Lzompuc.8R.03jOwiFqfISYIaezbr2i", function (err, result) {
    //     console.log(result);
    // });
    let token = jwt.sign({ email: "test1@gmail.com" }, "secretkey");
    res.cookie("token", token);
    console.log("done");
});

app.get("/read", function (req, res) {
    // res.send('read pages');
    // console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secretkey")
    console.log(data);
})

app.listen(3000);