'use strict';

const fs = require('fs');
const Detect = require('./detect');

var detect = async function(picPath, serverIP, port, servicekey, projectid) {
  let detect = new Detect(serverIP, port, servicekey, projectid);
  let buf = fs.readFileSync(picPath);
  let t1 = Date.now();
  let retStr = await detect.detect(buf);
  console.log('time cost:', Date.now() - t1, 'ms');
  return retStr;
};

(async () => {
  let retStr = await detect('./cherry.jpg', 'api.ai1to1.com', 443, 'test1', 'test1');
  console.log('retStr:', retStr);
})();
