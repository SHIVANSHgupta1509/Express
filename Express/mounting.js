const express=require('express')
const app=express()
const mongoose=require('mongoose')

app.listen(3000);

app.use(express.json());//global middleware

const userRouter=express.Router();
app.use('/user',userRouter);//global middleware

const authRouter=express.Router();
app.use('/auth',authRouter);

userRouter
.route('/')
.get(middleware1,getUsers,middleware2)//path specific middleware
.post(addUser)//path specific middleware
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById)

authRouter
.route('/signUp')
.get(getSignUp)
.post(postSignUp)


let users=[
    {'Name':"SG"},
    {"Name":"GenZ"}
]


function getUsers(req,res,next){
    // if(req.query){
    //     console.log(req.query);
    //     res.send("query recieved");
    // }
    console.log("getUsers func encountered");
    next();
}

function middleware1(req,res,next){
    console.log("mdw1 encountered");
    next();
}

function middleware2(req,res){
    console.log("mdw2 encountered");
    res.send(users);
}

function addUser(req,res){
    users.push(req.body);
    console.log(req.body);
    res.send(req.body);
}

function updateUser(req,res){
    users[0].Name='KG';
    for(let key in users){
        console.log(users[key]);
    }
    res.json({
        'msg':"user updated succesfully"
    })
}

function deleteUser(req,res){
    users.pop();
    for(let key in users){
        console.log(users[key]);
    }
    res.json({
        "msg":"user deleted successfully"
    })
}

function getUserById(req,res){
    console.log(req.params.id);
    res.send("params are recieved successfully");
}

function getSignUp(req,res){
    console.log("in Get SignUp");
    res.sendFile("/Users/shivanshgupta/Desktop/BK/Express/public/index.html");
}

function postSignUp(req,res){
    let dataObj=req.body;
    console.log(dataObj);
    res.json({
        'message':"user added"
    })
}