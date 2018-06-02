let hot_Game_Interpreter=()=>{
  Object.assign(Game_Interpreter.prototype,{
    本体(command){
      switch(command){
        case "跳":
          console.log('开始跳')
          this._self()._moveType=5
          break
        case "远离":
          console.log('开始远离')
          this._self()._moveType=4
        break
        case "消失":
          console.log(this._eventId)
          this._self().erase()
          //$gameMap._events.splice(this._eventId,1)
          //console.log($gameMap._events)
        break
        case "kill":
        console.log(this._eventId)
        this._self().clearPageSettings()
        //$gameMap._events.splice(this._eventId,1)
        //console.log($gameMap._events)
        break
        case "归位":
        this._self().locate(1,1)
        //$gameMap._events.splice(this._eventId,1)
        //console.log($gameMap._events)
        break
        case "标记":
        if(!$gamePlayer.isMoving()){
          $gamePlayer.moveTowardCharacter(this._self())
        }
        break
      }
      //console.log('真实坐标x'+$gameMap._events[this._eventId]._realX)
    },
    图片(name,blendmode){
      //console.log(name,mode)
      $gameScreen.showPicture(1,name,0,this._self().screenX(),this._self().screenY(),100,100,255,blendmode)
    },
    _self(){
      return $gameMap._events[this._eventId]
    },
  })
}
module.exports=hot_Game_Interpreter


//在事件页面直接设定脚本 this.本体() 即可执行
