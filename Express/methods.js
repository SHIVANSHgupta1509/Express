const express=require('express')
const app=express()
app.listen(3000);

app.use(express.json());

let users=[
    {'Name':"SG"},
    {"Name":"GenZ"}
]

app.get('/',(req,res)=>{
    res.send(users);
})

app.post('/add',(req,res)=>{
    users.push(req.body);
    console.log(req.body);
    res.send(req.body);
})

app.patch('/update',(req,res)=>{
    users[0].Name='KG';
    for(let key in users){
        console.log(users[key]);
    }
    res.json({
        'msg':"user updated succesfully"
    })
})

app.delete('/delete',(req,res)=>{
    users.pop();
    for(let key in users){
        console.log(users[key]);
    }
    res.json({
        "msg":"user deleted successfully"
    })
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("params are recieved successfully");
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send("query recieved");
})