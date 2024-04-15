const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io'); // Server represent the server-side of socketio
const io = new Server(server, {
    cors: '*',
    methods: '*'
})


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

module.exports = app;