'use strict';

const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config_aws.json');

let lambda = new AWS.Lambda({
  role: 'lambda_basic_execution'
});

lambda.invoke({ FunctionName: 'ZonaExtremaFunction' }, (err, data) => {
  if (err) console.log(err);

  console.log(data);
});
