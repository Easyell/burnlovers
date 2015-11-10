##build web server just *a little* quickly

models 数据相关

services 工具库相关

启动:

 > node bin/www

正式环境下启动:


 > NODE_ENV=product node bin/www


访问:

localhost:port/index/index

[texture从这里取](https://github.com/Easyell/burnlovers-texture)

－－－－－－－－－－－－－－－－－－－－－

图片压缩，谨慎调用，一个apiKey只能压500张图

  >  gulp tinyPng
 
－－－－－－－－－－－－－－－－－－－－－

上传assets，手动调用 

  >  gulp qn

－－－－－－－－－－－－－－－－－－－－－

更换资源位，手动调用

  > localhost:port/resource/change?position=标示符

 