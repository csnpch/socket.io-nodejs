module.exports = (io, socket) => {
    const sayHi = (payload) => {
      console.log('[server] sayhi : ' + payload.msg);
    }
  
    socket.on('exam:sayhi', sayHi);
}