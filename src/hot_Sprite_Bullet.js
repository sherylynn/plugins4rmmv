let hot_Sprite_Bullet=()=>{
  class Sprite_Bullet extends Sprite_Base {
    constructor(...args){
      super(...args)
      this.initialize(...args)
    }
    initialize(texture){//需要写一个test验证一下//验证后就是这样写没有问题
      super.initialize()
      this.bitmap=texture
      this.velocity=new Point(0,0)
    }
  }
}
module.exports=hot_Sprite_Bullet
