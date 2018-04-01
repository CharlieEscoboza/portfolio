require('dotenv').config();

const path = require('path');
const express = require('express');
const BodyParser = require('body-parser');
const webpack = require('webpack');
const WebDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require ('webpack-hot-middleware');

const app = express();
const router = require('./routes');
const serverPort = require('../../config/server').port;
const webpackConfig = require('../../webpack/webpack.dev.config');

const compiler = webpack(webpackConfig);

app.set('views', path.resolve(__dirname, '../app/views'));
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());


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

  app.use('/static', express.static(path.resolve(__dirname, '../../build/public')));
  app.use(express.static('./build'));
}

app.use('/static', express.static(path.resolve(__dirname, '../public')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));

app.use('/', router.homepage);
app.use('/contact', router.contact);
app.use('/info.json', router.info);



app.listen(serverPort, () => {
  console.log(`App listening on port ${serverPort} !`);
});
