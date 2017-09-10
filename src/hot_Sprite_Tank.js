let hot_Sprite_Tank=()=>{
  window.Direction={
    Down:0,
    Left:1,
    Right:2,
    Up:3
  }
  window.Tank_State={
    Live:0,
    Dying:1,
    Dead:2
  }

  class Sprite_Tank extends Sprite_Base{
    constructor(...arps){
      super(...arps)
      this.initialize(...arps)
    }
    initialize(texture,frameWidth,frameHeight,hp){
      super.initialize()
      this.canFire=true
      this.speed=0
      this.hp=hp
      this.state=Tank_State.Live
      this._animFrames=makeAnimFrames(texture,frameWidth,frameHeight)
      this._desireMoveTick=20
      this._moveTick=0
      this._desireFireTick=30
      this._fireTick=0
      this._currentAnimFrameIndex=0
      this._desireDieTick=30
      this._dieTick=0
      this.anchor=new Point(0.5,0.5)
      this.bitmap=texture
      this.look(Direction.Up)
    }
    get currentAnimFrames(){
      return this._animFrames[this._direction]
    }
    look(direction){
      if(this._direction!=direction){
        this._direction=direction
        this._currentAnimFrameIndex=0
        this.updateCurrentFrame()
      }
    }
    fire(texture){
      this.canFire=false
      let bullet=new Sprite_Bullet(texture)
      bullet.achor=new Point(0.5,0.5)
      let bulletSpeed=10
      switch (this._direction){
        case Direction.Down:
          bullet.rotation=-180*Math.PI/180
          bullet.x=this.x
          bullet.y=this.y+this.height/2
          bullet.velocity=new Point(0,bulletSpeed)
          break
        case Direction.Left:
          bullet.rotation=-90*Math.PI/180
          bullet.x=this.x-this.width/2
          bullet.y=this.y
          bullet.velocity=new Point(-bulletSpeed,0)
          break
        case Direction.Right:
          bullet.rotation=90*Math.PI/180
          bullet.x=this.x+this.width/2
          bullet.y=this.y
          bullet.velocity=new Point(bulletSpeed,0)
          break
        case Direction.Up:
          bullet.rotation=0
          bullet.x=this.x
          bullet.y=this.y-this.height/2
          bullet.velocity=new Point(0,-bulletSpeed)
          break
        default: break
      }
      AudioManager.playSe({
        name:'TankWarFire',
        pan:0,
        pitch:100,
        volume:100
      })
      return bullet
    }
    move(){
      switch(this._direction){
        case Direction.Down:
          this.y+=this.speed
          break
        case Direction.Left:
          this.x-=this.speed
          break
        case Direction.Right:
          this.x+=this.speed
          break
        case Direction.Up:
          this.y-=this.speed
          break
      }
    }
    hurt(damage){
      if(this.state==Tank_State.Live){
        this.hp=Math.max(0,this.hp-damage)
        if(this.hp<=0){
          this.canFire=false
          this.state=Tank_State.Dying
        }
      }
    }
    updateCurrentFrame(){
      let frame=this.currentAnimFrames[this._currentAnimFrameIndex]
      this.setFrame(frame.x,frame.y,frame.width,frame.height)
    }
    update(){
      super.update()
      switch (this.state){
        case Tank_State.Live:
          this._moveTick++
          if(this._moveTick>=this._desireMoveTick){
            this._moveTick=0
            this._currentAnimFrameIndex=this._currentAnimFrameIndex % this.currentAnimFrames.length
            this.updateCurrentFrame()
            this._currentAnimFrameIndex++
          }
          if(!this.canFire){
            this._fireTick++
            if(this._fireTick>=this._desireFireTick){
              this._fireTick=0
              this.canFire=true
            }
          }
          break
        case Tank_State.Dying:
          this._dieTick++
          if(this._dieTick>=this._desireDieTick){
            this._dieTick=0
            this.state=this.Tank_State.Dead
          }
          break
        case Tank_State.Dead:
          break
        default:break
      }
    }
  }
  window.Sprite_Tank=Sprite_Tank
}
module.exports=hot_Sprite_Tank
