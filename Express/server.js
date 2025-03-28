const express=require('express');
const app=express();
// const path=require('path');


app.get('/',(req,res)=>{
    // console.log(__dirname); 
    res.send('<h1>Hey!!!!!</h1>')
    // Output: /project/express
    
    // const filePath = path.join(__dirname, '..', 'HTTP', 'views', 'index.html');
    // res.sendFile(filePath);
})

app.get('/about',(req,res)=>{
    // res.send('<h1>Hey about!!</h1>')
    res.sendFile('/Users/shivanshgupta/Desktop/BK/HTTP/views/aboutUs.html')
})

app.get('/aboutUs',(req,res)=>{
    res.redirect('/about');
})

app.use((req,res)=>{
    res.status(200).sendFile('/Users/shivanshgupta/Desktop/BK/HTTP/views/404.html');
})
app.listen(3000);