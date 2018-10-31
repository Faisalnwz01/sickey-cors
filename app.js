
var port =  process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '0.0.0.0'
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [
        'https://sickey.netlify.com',
        'https://www.sickey.io',
        'https://www.dev.sickey.io',
        'https://sickey.io',
        'https://dev.sickey.io',
        'http://localhost:4200',
        'http://localhost:8100',
        'http://akount.io',
        '', 
        'https://akount.netlify.com',
        'https://5b08ed5ab13fb1517f119adf--akount.netlify.com'], // Allow all origins
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
