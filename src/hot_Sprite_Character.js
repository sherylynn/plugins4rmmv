let hot_Sprite_Character=()=>{
  let Sprite_Character_prototype_initialize=Sprite_Character.prototype.initialize
  Object.assign(Sprite_Character.prototype,{
    total_frame(){
      // let 行走图帧数=7
      return 7
    },
    //修改了原来的方法
    patternWidth(){
      if (this._tileId > 0) {
        return $gameMap.tileWidth()
      } else if (this._isBigCharacter) {
        return this.bitmap.width / this.total_frame()
      } else {
        return this.bitmap.width / this.total_frame()
        //return this.bitmap.width / (this.total_frame()*4)
      }
    },patternHeight() {
      if (this._tileId > 0) {
          return $gameMap.tileHeight();
      } else if (this._isBigCharacter) {
          return this.bitmap.height / 4;
      } else {
        //因为是放了大图，就是不是由小图拼接的，所以直接设置了全部为大图模式
          return this.bitmap.height / 4;
      }
  },
    characterBlockX() {
      if (this._isBigCharacter) {
        return 0
      } else {
        var index = this._character.characterIndex()
        return index % 4 * this.total_frame()
      }
    },
    tilemap_index(){
      this._tilemap_index=SceneManager._scene._spriteset._tilemap.children.findIndex((n)=>{
        return n===this
      })
      return this._tilemap_index
    },
    tilemap_reborn(){
      SceneManager._scene._spriteset._tilemap.children.splice(this._tilemap_index,0,this)
    },
    tilemap_fake(){
      SceneManager._scene._spriteset._tilemap.children.splice(this._tilemap_index,0,new Sprite_Character($gamePlayer))
    },//new Sprite_Character($gamePlayer)===$gamePlayer._sprite_character //true //但是运行会出错
    tilemap_delete(){
      SceneManager._scene._spriteset._tilemap.children.splice(this.tilemap_index(),1)
    },
    tilemap_fake_add(){
      SceneManager._scene._spriteset._tilemap.addChild(new Sprite_Character($gamePlayer))
      //用了addChild 代替直接操作数组，就避免了问题
    },
    tilemap_add(){
      SceneManager._scene._spriteset._tilemap.addChild(this)
    },
    tilemap_remove(){
      SceneManager._scene._spriteset._tilemap.removeChild(this)
    },
    initialize(character){
      Sprite_Character_prototype_initialize.apply(this, arguments)
      character._sprite_character=this
    }
  })
}
module.exports=hot_Sprite_Character
