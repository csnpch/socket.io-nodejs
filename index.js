const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);


app.get('/', (req, res) => {
    // res.status(200).json({ status: 'OK', msg: 'Server is running!' });
    res.sendFile(__dirname + '/index.html');
});


const socketService = (socket) => {
    require('./src/socket_services/exam')(io, socket);
}


io.on("connection", socketService);
// io.on('connection', (socket) => {
    
//     console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     socket.on('message', (data) => {
//         console.log(data.msg)
//     });
    
// })


server.listen(3000, () => {
  console.log('listening on *:3000');
});