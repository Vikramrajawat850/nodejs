const h=require('http')
// console.log(h)
h.createServer((req,res)=>{res.write("hello my friend")
    res.end()
}).listen(3000,console.log("server start server localhost:3000"))




// create server with this code after that if terminal is not respond use this commond:-
// open cmd and type:npm i -g nodemon if execute this commond then exit from cmd.
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted and allowed all permission.(this commond is used when vs code terminal not respond).
// then use this commond:-
// nodemon filename.js extension