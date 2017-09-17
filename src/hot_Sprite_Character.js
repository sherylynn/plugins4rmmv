let hot_Sprite_Character=()=>{
  let Sprite_Character_prototype_initialize=Sprite_Character.prototype.initialize
  Object.assign(Sprite_Character.prototype,{
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
