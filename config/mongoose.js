const dotenv = require('dotenv');
const path = require('path');

const envFile = process.env.NODE_ENV === 'production' ? '../.env.prod' : '../.env.dev';
dotenv.config({ path: path.resolve(__dirname, envFile) });
// require mongoose
const mongoose = require('mongoose');
// connect to database
console.log('Connecting to database...', path.resolve(__dirname, envFile));
mongoose.connect(process.env.mongoDbUrl);

// acquire the connection (to check if it is successful)
const db = mongoose.connection;
// check for error
db.on('error', console.error.bind(console, 'connection error:'));
// once connection is open, log to console
db.once('open', function () {
  console.log('connected to database');
});
