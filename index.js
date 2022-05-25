const express = require('express');
const app = express();
const server = require("http").createServer(app);

const socketIoOption = {
    cors: {
        origin: '*'
    }
}
const io = require("socket.io")(server, socketIoOption);


const socketService = (socket) => {

    console.log('a user connected');
    socket.on('message', (data) => console.log(data.msg) );
    
    require('./src/socket_services/exam')(io, socket);

}

io.on("connection", socketService);



app.get('/', (req, res) => res.sendFile(__dirname + '/index.html') );


server.listen(3000, () => {
  console.log('listening on *:3000');
});
