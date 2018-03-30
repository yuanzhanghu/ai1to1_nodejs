# ai1to1的nodejs SDK

https://www.ai1to1.com
是一个定制图像识别开放平台，可以定制训练图像识别的深度学习模块, 并自动生成识别API。

本代码是nodejs版本的SDK, 纯javascript的实现请参考https://api.ai1to1.com/public/test.html

# 使用方法
### 将detect.js和httpsGet.js import到你的nodejs工程里面
### 调用detect函数进行检测。

```
const Detect = require("./detect");
let detect = new Detect(serverIP, port, serviceKey, projectId);
let buf = fs.readFileSync(picPath);
let retStr = await detect.detect(buf);
```

其中serviceKey在注册ai1to1账户后可以获得， projectId可以在登录后创建项目后得到。
**具体请参考test_detect.js**

# 优化模型
### 调用detectErrorsInLib检测图片库中的错误，如果有入库错误，请进入图片管理手动删除错误图片.

  https://api.ai1to1.com/customize/detectErrorsInLib?projectId=xxx&serviceKey=yyy
### 再次按照训练步骤进行训练.

**具体请参考test_optimizeTrain.js**
