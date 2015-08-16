var handlers = require('./handlers');
var router = require('./router');
var server = require('./server');

var routes = {
  '/': handlers.home,
  '/home': handlers.home,
  '/upload': handlers.upload,
  '_static': handlers.serveStatics
};

server.start(router.route, routes);
