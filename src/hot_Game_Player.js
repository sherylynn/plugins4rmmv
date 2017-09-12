let hot_Game_Player=()=>{
  let Game_Player_prototype_update=Game_Player.prototype.update
  /*
  Game_Player.prototype.update=function () {

    Game_Player_prototype_update.call(this)
  }
  //两种方法在hot加载的环境中都不能再正常运行，人物会卡图
  //测试发现即使不放进去也会卡图
  */
  //error createArray error
  Object.assign(Game_Player.prototype,{
    update(){
      Game_Player_prototype_update.apply(this,arguments)
      if(Input.isPressed('control')){
        for(let _e of $gameMap._events){
          if(!_e){

          }else  {
            console.log('有事件')
            if(!_e._erase){
              console.log('没函数')
            }else {
              console.log(_e)
              _e._erase()//
            }
          }
        }
        //console.log($gameMap._events)
        //原来error是出在第一个是空的
      }
      //console.log(1)
    }
  })

}
module.exports=hot_Game_Player
