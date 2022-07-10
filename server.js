const app = require('express')();
const server=require('http').createServer(app);
const io=require('socket.io')(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('novo usuario',socket.id)
    socket.on('envia',(msg,id_user)=>{
        socket.broadcast.emit('recebe',msg,id_user);
    })
})

server.listen(3000,function(){
    console.log('connectado')
})
