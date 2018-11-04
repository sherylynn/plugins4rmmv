# plugins4rmmv

## plugins for rmmv

可以结合作arpg使用，也可以单独作为开发的环境，支持热更新热加载，包含了cordova打包apk的功能

## how to use

浅克隆
git clone --depth 1 https://sherylynn.win/p/plugins4rmmv

git clone --depth 1 https://sherylynn.win/p/game

git clone --recursive https://github.com/sherylynn/plugins4rmmv

git clone --recursive https://sherylynn.win/p/plugins4rmmv

检索更新
git submodule update --remote --merge
推送修改
git push --recurse-submodules=on-demand

put game project to game folder

npm install

npm run dev

## 结合自己项目

将项目文件拷贝直接进game文件夹

删除src下脚本，将自己需要写的插件放入src，入口文件命名为index.js 模块文件命名为 HMR_1.js

index:
```JavaScript
let HMR_1=require('./HMR_1.js')
HMR_1()
if(module.hot){
  module.hot.accept('./HMR_1.js',function () {
    HMR_1=require('./HMR_1.js')
    HMR_1()
  })
}
```

HMR_1:
```JavaScript
let HMR_1=()=>{
  console.log(1)
  /** code here*/
}
module.exports=HMR_1
```

然后运行webpack 把编译出的app.js 在项目里插件加载开启
接下来就可以

    npm run dev
会自动打开浏览器，就可以实时运行开发了
