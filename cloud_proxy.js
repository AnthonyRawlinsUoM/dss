const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const socketIO = require('socket.io');
const redisAdapter = require('socket.io-redis');

const app = express();
const uuidv4 = require('uuid/v4');
const moment = require('moment');

app.use(express.static(path.join(__dirname, 'dist/ReactiveServer/')));

app.use(function (req, res, next) {
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ReactiveServer/index.html'))
});

const port = process.env.PORT || '5052';
app.set('port', port);



const server = http.createServer(app);

const io = socketIO(server);
io.adapter(redisAdapter({
  host: 'localhost',
  port: 6379
}));

const sioc = require('socket.io-client');

api = sioc('http://localhost:5051', {
  transports: ['websocket']
});


// This is where we map client and server events
// We simply act as a proxy between public service running on this Node,
// and the Python app running internally in the private cloud.

// Basically its the Javascript Event signatures mapped to the Python Event signatures

// Events where acknowledgement is desired

// eg., c ---> p ----> s then c <--- p < --- s
//      c 
const ProxyEventType = {
  TEST: 'test',
  TEST_RESPONSE: 'test_response',
  QUERY: 'query',
  QUERY_RESPONSE: 'query_response',
  STATUS: 'status',
  STATUS_RESPONSE: 'status_response',
  PROGRESS: 'progress',
  PROGRESS_RESPONSE: 'progress_response',
  FRAPPE_QUERY: 'frappe_query',
  FRAPPE_QUERY_RESPONSE: 'frappe_query_response'
}

function upstream_response(ev) {
  let pe = ProxyEventType(uppercase(e + '_response'));
  return pe.value;
}


// Events where no acknowledgement is required
// eg., c ---> p
// or,  c <--- p
// or,  p ---> s
// or,  p <--- s

const NoticeEventType = {
  ACK: 'acknowledgement',
  LOG: 'log',
  ERROR: 'error'
}

io.on('connection', (socket) => {
  /* CONNECTION CODE */
  console.log('User has connected.');

  socket.on('disconnect', function () {
    io.emit(NoticeEventType.LOG.value, 'User (' + socket.id + ') has disconnected.');
  });

  // Broadcast to all connected listeners that a new client has connected.
  io.emit('log', 'User with Session ID: ' + socket.id + ' has connected.');

  /* GENERIC PROXY PASSTHROUGH CODE */

  // For all coded/mapped EventTypes...
  // that send upstream and expect to receive a response
  for (var ev in ProxyEventType) {
    socket.on(ev.value, (data) => {
      console.log(data);
      api.emit(ev.value, data);
      // Acknowledge the proxy's receipt of the event
      socket.emit(NoticeEventType.ACK.value, {
        type: ev.value
      });

      let r = upstream_response(ev);

      // Subscribe to expected response for that event type
      api.on(r, (data) => {
        // After getting the response, pass it downstream to client
        socket.emit(r, data);
        // Acknowledge to the server that we received data
        api.emit(NoticeEventType.ACK, {
          type: r
        });
      });
    });
  }

  // Set up All Notice Passthroughs
  for (var ev in NoticeEventType) {
    // Listen for Notices from Downstream
    socket.on(ev.value, (data) => {
      console.log(data);
      // Pass the notice on..
      api.emit(ev.value, data);
    });

    // Subscribe to Upstream Notices
    api.on(ev.value, (data) => {
      // After getting the notice, pass it downstream to client
      socket.emit(r, data);
    });
  }
});

server.listen(port, () => {
  console.log('ReactiveProxy Server running on', port);
});