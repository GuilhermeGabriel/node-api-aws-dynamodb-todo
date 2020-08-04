const AWS = require('aws-sdk');
require('dotenv').config;

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
  endpoint: ''
});

module.exports = AWS;