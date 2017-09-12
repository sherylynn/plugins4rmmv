let hot_Scene_Map=()=>{
  let Scene_Map_prototype_update=Scene_Map.prototype.update
  Object.assign(Scene_Map.prototype,{
    update(){
      //Scene_Map_prototype_update.call(this)
      //console.log(1)
      if(Input.isPressed('control')){
        console.log($gameMap._events)

        for(let _e of $gameMap._events){
          if(!!_e){
            _e.erase()//是自己函数名写错了,erase没有下划线
            //_e._erased = true//有问题，根本这类的属性都没有了
            //_e.refresh()//由于事件列表的第一个是空函数，所以不行 //直接 _erase的方法不见了，只能用次一级的方法
          }
        }

        //$gameMap._events[2].clearPageSettings()
        //压根不生效，可能和场景自己的update冲突或者在this的获得有问题，因为总是undefined
        //$gameMap._events.splice(2,1)
        //$gameMap._events[2].erase()
        //console.log($gameMap)
        /*
        for(let _e of $gameMap._events){
          if(typeof(_e._erase)=="undefined"){
            _e._erase()
          }
        }
        */
        /*
        for(let i=0;i<=$gameMap._events.length;i++){
          console.log(i)
          $gameMap._events[i]._erase()
        }
        */
      }
      Scene_Map_prototype_update.call(this)

    }
  })
}
module.exports=hot_Scene_Map
