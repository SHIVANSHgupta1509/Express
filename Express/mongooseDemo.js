const express=require('express')
const app=express()
const mongoose=require('mongoose')

app.listen(3000);

app.use(express.json());//global middleware

const userRouter=express.Router();
app.use('/user',userRouter);//global middleware

userRouter
.route('/')
.get(getUsers)//path specific middleware
.post(addUser)//path specific middleware
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById)

async function getUsers(req,res){
    let allUsers=await userModel.find();
    res.json({message:'list of users',
              data:allUsers})
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

const db_link='mongodb+srv://admin:9OOojmuVSiL8c0lp@cluster0.keenr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(db_link)
.then(function(db){
    // console.log(db);
    console.log('db connected');
})
.catch(function(err){
    // console.log(err);
    console.log('err')
})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8
    }
})

const userModel=mongoose.model('userModel', userSchema);

// (async function createUser(){
//     let user={
//         name:'KG',
//         email:"kg@gmail.com",
//         password:"12345678",
//         confirmPassword:"12345678"
//     }

//     let userData=await userModel.create(user);
//     console.log(userData);
// })()