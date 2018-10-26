# ai1to1的nodejs SDK


定制图像识别开放平台http://ai1to1.com
可以定制训练图像识别的深度学习模型, 并自动生成识别API。

本代码是nodejs版本的SDK, 纯javascript的实现请参考http://api.ai1to1.com:7001/public/test.html

# 使用方法
### 1. 将detect.js和httpsGet.js import到你的nodejs工程里面
### 2. 调用detect函数进行检测。

```
const Detect = require("./detect");
let detect = new Detect(serverIP, port, servicekey, projectid);
let buf = fs.readFileSync(picPath);
let retStr = await detect.detect(buf);
```

其中servicekey在注册ai1to1账户后可以获得， projectid可以在登录后创建项目后得到。
**具体请参考test_detect.js**

# 优化模型
### 1. 调用detectErrorsInLib检测图片库中的错误，如果有入库错误，请进入图片管理手动删除错误图片.

  https://api.ai1to1.com/customize/detectErrorsInLib?projectid=xxx&servicekey=yyy
### 2. 再次按照训练步骤进行训练.

**具体请参考test_optimizeTrain.js**
