const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3005;
io.on('connection', (socket) => {
  console.log('connected to server!')
  socket.on('message', (e) => {
      console.log(e)
      socket.broadcast.emit('message', e)
  })
})
io.on('disconnect', (e) => {
    console.log('disconnected from server')
})
http.listen(port, () => console.log(`server listening on port: ${port}`))