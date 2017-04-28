/**
 * Created by Charlie on 11/26/2016.
 */

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

app.set('view-engine', 'hbs');
app.engine('html', require('hbs').__express);
app.set('views', './lib/client/templates');


/**
 * Webpack dev server middle wares
 */
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

app.use(express.static('./build'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));

app.use('/', router.homepage);
app.use('/contact', router.contact);



app.listen(serverPort, () => {
  console.log(`App listening on port ${serverPort} !`);
});
