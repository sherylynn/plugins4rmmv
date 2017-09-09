let hot=require('./hot.js')
let hot_Scene_Boot=require('./hot_Scene_Boot.js')
hot_Scene_Boot()
import hot2 from './hot2.js'
window.hot=hot
//后面的这个函数只响应了一次
if(module.hot){
  console.log('有热加载')
  module.hot.accept('./hot_Scene_Boot.js',function(){
    console.log('hot.js有热加载')
    hot_Scene_Boot=require('./hot_Scene_Boot')//采用了node热加载时候的写法
    hot_Scene_Boot()//然而这个加载好像就初始的时候有效
  })
  module.hot.accept('./hot.js',function(){
    console.log('hot.js有热加载')
    hot=require('./hot.js')//采用了node热加载时候的写法
    hot()
  })
  module.hot.accept('./hot2.js',function(){
    console.log('hot.js有热加载')//采用了官方的写法，另外发现如果不写module.hot.accept，就会默认直接刷新浏览器
    hot2()
  })
}



ImageManager.loadTankwar = (filename, hue) => {
  return ImageManager.loadBitmap('img/mndtankwar/', filename, hue, false)
}
