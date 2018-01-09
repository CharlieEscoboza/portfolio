const path = require('path');
const express = require('express');
const BodyParser = require('body-parser');
const webpack = require('webpack');
const WebDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require ('webpack-hot-middleware');

const app = express();
const router = require('./routes');
const serverPort = require('../../config/server').port;
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);

app.set('views', path.resolve(__dirname, '../app/views/pages'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/**
 * Webpack dev server middle wares
 */
if (process.env.NODE_ENV === 'development') {
  app.use(WebDevMiddleware(compiler, {
    hot: true,
    filename: webpackConfig.output.filename,
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
  }));

  app.use(WebpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}

app.use('/static', express.static('./lib/client/styles/images'));
app.use(express.static('./build'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));

app.use('/', router.homepage);
app.use('/contact', router.contact);
app.use('/info', router.info);



app.listen(serverPort, () => {
  console.log(`App listening on port ${serverPort} !`);
});
