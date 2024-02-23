const express=require('express')
const users=require('./MOCK_DATA.json')
const fs=require('fs')
const app=express()
const PORT=8000;

app.use(express.urlencoded({extended:false}))

app.get('/user',(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
})

app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id==id);
    return res.json(user);
}).patch((req,res)=>{
    const id = Number(req.params.id);
        const body = req.body;
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            return res.status(404).json({ error: "User not found" });
        }
        users[userIndex] = { ...users[userIndex], ...body };
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }
            return res.json({ status: "success", id });
        });
}).delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    users.splice(userIndex, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ status: "success", id });
    });
});

app.post('/api/users',(req,res)=>{
    //TODO:Edit the user
    const body=req.body;
    console.log("Body",body);
    users.push(body);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"sucess",id:body.id});
    })
    
})

// app.patch('/api/users/:id',(req,res)=>{
//     //TODO:Edit the user
//     return res.json({status:"pending"});
// })

// app.delete('/api/users/:id',(req,res)=>{
//     //TODO:Delete the user
//     return res.json({status:"pending"});
// })




app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))