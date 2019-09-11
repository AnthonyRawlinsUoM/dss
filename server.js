const express = require('express');
const http = require('http');
const path = require('path');

const app = require express();

const port = process.env.PORT || 3335;

app.use(express.static(__dirname + '/dist/ReactiveServer'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

const server = http.reateServer(app);

server.listen(port, () => console.log('ReactiveServer now running on port: ' + port));
