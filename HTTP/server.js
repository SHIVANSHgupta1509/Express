const http=require('http');
const fs=require('fs');
const _=require('lodash')


const server=http.createServer((req,res)=>{
    //consoles only after req is made
    console.log("request made from browser to server");
    console.log(req.method);
    console.log(req.url);
    console.log(req);

    let path='./views';
    switch(req.url){
        case'/':
        path+='/index.html' 
        break;
        case'/aboutUs':path+='/aboutUs.html' 
        break;
        case'/about':
        res.statusCode=301;
        res.setHeader('Location','/aboutUs')
        res.end()
        break
        default:
            res.statusCode=404;
            path+='/404.html'
    }

    let greet=_.once(()=>{
        console.log("Hey I am lodash greet, invoked only once!!")
    })

    greet()
    greet()

    console.log(_.random());

    // res.setHeader('Content-Type','text/plain');
    // res.write("Hey!!")
    // res.end();
    fs.readFile(path,(err,data)=>{
        if(err)console.log(err+"efgvfewqedrewqwed");
        else{
            res.setHeader('Content','text/html');
            res.write(data);
            res.end();
        }
    })
})

//ears, localhost is optional parameter
server.listen(3000,'localhost',()=>{
    console.log("server is listening on port 3000")
})

