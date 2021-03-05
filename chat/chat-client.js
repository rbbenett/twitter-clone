var socket = require('socket.io-client')('http://localhost:3005');
const repl = require('repl')
const chalk = require('chalk');

let username = null;

socket.on('connect', () => {
    console.log(chalk.green('=== start chatting ==='));
    username = process.argv[2]
})

socket.on('message', (data) => {
    const { cmd, username } = data
    console.log(chalk.red(username + ': ' + cmd.split('\n')[0]));
})

socket.on('disconnect', function () {
    socket.emit('disconnect')
})

repl.start({
    prompt: '',
    eval: (cmd) => {
        socket.send({ cmd, username })
    }
})

