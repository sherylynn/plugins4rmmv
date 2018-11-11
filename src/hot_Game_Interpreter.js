let hot_Game_Interpreter=()=>{
  Object.assign(Game_Interpreter.prototype,{
    本体(command){
      switch(command){
      case '跳':
        console.log('开始跳')
        this._self()._moveType=5
        break
      case '远离':
        console.log('开始远离')
        this._self()._moveType=4
        break
      case '消失':
        console.log(this._eventId)
        this._self().erase()
        //$gameMap._events.splice(this._eventId,1)
        //console.log($gameMap._events)
        break
      case 'kill':
        console.log(this._eventId)
        this._self().clearPageSettings()
        //$gameMap._events.splice(this._eventId,1)
        //console.log($gameMap._events)
        break
      case '归位':
        this._self().locate(1,1)
        //$gameMap._events.splice(this._eventId,1)
        //console.log($gameMap._events)
        break
      case '标记':
        if(!$gamePlayer.isMoving()){
          $gamePlayer.moveTowardCharacter(this._self())
        }
        break
      }
      //console.log('真实坐标x'+$gameMap._events[this._eventId]._realX)
    },
    图片(id,name,blendmode,new_z){
      //console.log(name,mode)
      //id是图片的序号，name是图名称，z是图位置，new_z负数时直接不出现，0时闪动，1时在图上但是人物的下面，因为人物的z是3，所以4以上时在人物上面
      $gameScreen.showPicture(id,name,0,this._self().screenX(),this._self().screenY(),100,100,255,blendmode)
      if (new_z!=null) {
        //把绘制图片时的图片精灵提取到$fuck 里
        let $fuck=SceneManager._scene._spriteset._pictureContainer.children[id-1]
        // 展示一下将去的位置，但是这位置会随着变化
        let $fuck_new=SceneManager._scene._spriteset._tilemap.children[0]
        if($fuck._pictureName==name){//避免add children后消失出错，add child后原来的地方就会消失掉图
          $fuck.z=new_z
          SceneManager._scene._spriteset._tilemap.addChild($fuck)
        }
        //$fuck_new.z=new_z
      }
    },
    _gif(name){
      let id = name.split('.')[0]
      //通过是否执行过判断，而不是通过是否存在判断，不好
      if (this._self()._gif_id != id) {
        let _img = document.createElement("img")
        let z = 100
        _img.id = id
        _img.src = "img/pictures/" + name
        //获取画布的margin属性
        //getComputedStyle(GameCanvas).margin
        _img.style = "z-index: " + z + "; position: absolute; margin: " + getComputedStyle(GameCanvas).margin + "; left:" + (this._self().screenX()-_img.width) + "px;" + "top:" + (this._self().screenY()-_img.height) + "px;"
        //设置index后没有在透明的canvas后显示，把canvas设置成透明也不行
        //GameCanvas.style.background="rgba(255,255,255,0)"


        document.body.appendChild(_img)
        this._self()._gif_id = id
      }
    },
    _gif_remove(name){
      if(document.getElementById(name)){
        document.body.removeChild(document.getElementById(name))
      }

    },
    _self(){
      return $gameMap._events[this._eventId]
    },
  })
}
module.exports=hot_Game_Interpreter


//在事件页面直接设定脚本 this.本体() 即可执行
