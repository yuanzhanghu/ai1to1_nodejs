'use strict';

const https = require('https');

module.exports = function(serverIP, port, urlPath, projectId, serviceKey) {
  return new Promise((resolve, reject) => {
    var options = {
      host: serverIP,
      port: port,
      path: urlPath + '?projectId=' + projectId + '&serviceKey=' + serviceKey,
      method: 'GET',
    };

    let retStr = "";
    var req = https.request(options, function(res) {
      res.on('data', function (chunk) {
        retStr += chunk.toString();
      });
      res.on('end', () => {
        //console.log('end...');
        resolve(retStr);
      });
    });

    req.on('error', (err) => {
      console.log('request error:', err);
      let retObj = {error: err};
      resolve(JSON.stringify(retObj));
    });
    req.write("");
    req.end();
  });
};
