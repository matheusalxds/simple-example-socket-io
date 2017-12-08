const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

io.on('connection', socket => {
  console.log('a user has been connected');
  socket.emit('msg', { body: 'Olá fulano'});
  setInterval(() => socket.emit('msg', {body: 'Olá fulano'}), 2500);
  socket.on('msg', msg => console.log(msg));
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

http.listen(port, () => console.log(`Runing on port ${port}`))