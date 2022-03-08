const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/_api', { target: 'https://kulonprogo.geschool.net/', changeOrigin: true }));
};

// module.exports = function(app) {
//     app.use(proxy('/_api', { target: 'https://teach.geschool.net/',  secure: false, }));
//     app.use(proxy('/p/', { target: 'https://teach.geschool.net/',  secure: false, }));
// }; 