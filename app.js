const { Socket } = require('dgram')

let io = require('socket.io')(3000, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"],
      allowedHeaders: ["content-type"],
      credentials: true //Habilida as credenciais dos dois lados
    },
})

io.on("connection", (socket)=>{
    console.log('novo usuario encontrado')

    socket.on("client_hello", (data)=>{
        console.log(data)
        io.sockets.emit("server_resp", data)
    })
    
})