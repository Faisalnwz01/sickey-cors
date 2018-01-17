
app.configure(function() {
  // Set the IP and port to use the OpenShift variables.
  app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 8080);
  app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '0.0.0.0');
});

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['https://sickey.netlify.com', 'https://www.sickey.io', 'https://sickey.io'], // Allow all origins
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
