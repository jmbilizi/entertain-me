const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const auth = require('./routes/auth');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// morgan, bodyparser, connectionHistory
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));

app.use(
  connectHistoryApiFallback({
    verbose: false,
  })
);
app.use('/api/auth', auth);

// Define API routes here
app.get('/test', (req, res) => {
  res.send('test from server');
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// mongo

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/entertainme', {
  useNewUrlParser: true,
  useFindAndModify: false,
}, () => {
  console.log('connected to mongodb');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;
