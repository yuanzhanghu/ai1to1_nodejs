'use strict';

const querystring = require('querystring');
const https = require('https');
const fs = require('fs');

class Detect {
  constructor(serverIP, port, serviceKey, projectId) {
    this.serverIP = serverIP;
    this.port = port;
    this.serviceKey = serviceKey;
    this.projectId = projectId;
  }

  detect(buf) {
    let self = this;
    return new Promise((resolve, reject) => {
      let base64String = buf.toString('base64');
      console.log('base64String.length:', base64String.length);
      let sendObj = {image:base64String};
      let content = querystring.stringify(sendObj); //url encode
      let t1 = Date.now();
      var options = {
        host: self.serverIP,
        port: self.port,
        path: '/customize/detect?projectId=' + self.projectId + '&serviceKey=' + self.serviceKey,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Accept-Encoding':'gzip, deflate, br',
          'Cache-Control':'no-cache',
          'Connection':'keep-alive',
          'Pragma':'no-cache',
          'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36',
        }
      };

      let retStr = "";
      var req = https.request(options, function(res) {
        res.on('data', function (chunk) {
          //fs.writeFileSync('response.html', chunk);
          retStr += chunk;
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
      req.write(content);
      req.end();
    });
  }
};


module.exports = Detect;
