var app = require('../app');
var http = require('http');
var { onError, onListening, normalizePort } = require('./utils');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', err => onError(err, port));
server.on('listening', () => onListening(server));
