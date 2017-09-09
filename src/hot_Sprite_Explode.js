let hot_Sprite_Explode=()=>{
  class Sprite_Explode extends Sprite_Base{
    constructor(...args){
      super(...args)
      this.initialize(...args)
    }
    initialize(texture){
      super.initialize()
      this._animFrams=makeAnimFrames(texture,128,128)[0]
      this._desireTick=6
      this._tick=0
      this._currentAnimFrameIndex=0
      this.isFinished=false
      this.bitmap=texture
      this.updateCurrentFrame()
    }
    updateCurrentFrame(){
      let frame=this._animFrams[this._currentAnimFrameIndex]
      this.setFrame(frame.x,frame.y,frame.width,frame.height)
    }
    update(){
      super.update()
      this._tick++
      if(this._currentAnimFrameIndex>=(this._animFrams.length-1)){
        this.isFinished=true
      }else{
        if(this._tick>=this._desireTick){
          this._tick=0
          this.updateCurrentFrame()
          this._currentAnimFrameIndex++
        }
      }
    }
  }
}
module.exports=hot_Sprite_Explode
