'use strict';

const fs = require('fs');
const httpGet = require('./httpsGet');

(async () => {
  const cmdSeq = [
    //'/customize/trainServer/stop', //停止trainServer,  test1项目不支持
    //'/customize/detectServer/stop',//停止detectServer,  test1项目不支持
    '/customize/detectServer/start', //加载模型，再次启动detectServer
    //'/customize/detectErrorsInLib',  //检测图片库中的错误, 如果有入库错误，请进入图片管理，手动删除错误图片,  test1项目不支持
    //'/customize/trainServer/start', //再次启动trainServer,  test1项目不支持
    //'/customize/train/start', //再次启动训练,  test1项目不支持
  ];
  const serverIP = 'api.ai1to1.com';
  for (let i = 0; i < cmdSeq.length; i++) {
    console.log("httpsGet", serverIP, cmdSeq[i]);
    let retStr = await httpGet(serverIP, 443, cmdSeq[i], 'test1', 'test1');
    console.log('retStr', retStr);
    let retObj = JSON.parse(retStr);
    if (retObj.error && retObj.error != "") {
      console.log("eror:", retObj.error);
    } else {
      console.log('done.');
    }
  }
})();
