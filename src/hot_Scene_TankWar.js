/*
let hot_Scene_TankWar=()=>{

}
module.exports=hot_Scene_TankWar
*/
///*
let hot_Scene_TankWar=()=>{
  class Scene_TankWar extends Scene_Base{
    constructor(...args){
      super(...args)
      this.initialize(...args)
    }
    initialize(){
      super.initialize()
      this._isGameOver=false
      this._maxEnemyCount=20
      this._eliminatedEnemy=0
      this._finishTick=0
      this._playerSpeed=2
      this._playerBullets=[]
      this._enemyTanks=[]
      this._enemyBullets=[]
      this._explodes=[]
    }
    loadTextures(){
      this._playerTexture=ImageManager.loadTankwar('TankPlayer')
      this._enemyTexture=ImageManager.loadTankwar('TankEnemy')
      this._bulletRedTexture=ImageManager.loadTankwar('BulletRed')
      this._explodeTexture=ImageManager.loadTankwar('Explode')
    }
    createEnemy(){
      let tankEnemy=new Sprite_Enemy(this._enemyTexture,40,40,1)
      tankEnemy.speed=2
      tankEnemy.x=60+Math.randomInt(Graphics.boxWidth-120)
      tankEnemy.y=60
      tankEnemy.look(Direction.Down)
      this.addChild(tankEnemy)
      let animation=$dataAnimations[46]
      tankEnemy.startAnimation(animation,false,0)
      this._enemyTanks.push(tankEnemy)
    }
    createExplode(x,y){
      let explode=new Sprite_Explode(this._explodeTexture)
      explode.x=x
      explode.y=y
      explode.achor=new Point(0.5,0.5)
      explode.scale=new Point(0.7,0.7)
      this._explodes.push(explode)
      this.addChild(explode)
    }
    create(){
      super.create()
      this._backgroundSprite=new Sprite(ImageManager.loadTankwar('Background'))
      this.addChild(this._backgroundSprite)
      this.loadTextures()
    }
    start(){
      super.start()
      AudioManager.playSe({
        name:'TankWarStart',
        pan:0,
        pitch:100,
        volume:100
      })
      this._player=new Sprite_Tank(this._playerTexture,40,40,2)
      this._player.speed=0
      this._player.x=Graphics.boxWidth/2
      this._player.y=Graphics.boxHeight/2-this._player.height-20
      this.addChild(this._player)
    }
    //检查按键
    update(){
      super.update()
      if(this._player.state==Tank_State.Live){
        this._player.speed=0
        if(Input.isPressed('down')){
          this._player.look(Direction.Down)
          this._player.speed=this._playerSpeed
        }
        if(Input.isPressed('left')){
          this._player.look(Direction.Left)
          this._player.speed=this._playerSpeed
        }
        if(Input.isPressed('right')){
          this._player.look(Direction.Right)
          this._player.speed=this._playerSpeed
        }
        if(Input.isPressed('up')){
          this._player.look(Direction.Up)
          this._player.speed=this._playerSpeed
        }
        if(Input.isPressed('ctrl')&&this._player.canFire){
          let bullet=this._player.fire(this._bulletRedTexture)
          this._playerBullets.push(bullet)
          this.addChild(bullet)
        }
        if(this._player.speed!=0){
          this._player.move()
        }
      }
      for (let i=this._playerBullets.length-1;i>=0;i--){
        this._playerBullets[i].move()
        if(this._playerBullets[i].x>=Graphics.boxWidth||
            this._playerBullets[i].x<=0||
            this._playerBullets[i].y>=Graphics.boxHeight||
            this._playerBullets[i].y<=0
        ){
          let outBullet=this._playerBullets.splice(i,1)[0]
          this.removeChild(outBullet)
        }
      }
      for (let i=this._playerBullets.length-1;i>=0;i--){
        for (let ti =this._enemyTanks.length-1;i>=0;i--){
          if(this._enemyTanks[ti].state!=Tank_State.Live) continue
          if(this._playerBullets[i].x>=this._enemyTanks[ti].x-this._enemyTanks[ti].width/2&&
            this._playerBullets[i].x<=this._enemyTanks[ti].x+this._enemyTanks[ti].width/2&&
            this._playerBullets[i].y>=this._enemyTanks[ti].y-this._enemyTanks[ti].height/2&&
            this._playerBullets[i].y<=this._enemyTanks[ti].y+this._enemyTanks[ti].height/2
          ){
//---------------------------------------------------------
          }
        }
      }
    }
  }
  window.Scene_TankWar=Scene_TankWar
}
module.export=hot_Scene_TankWar
//*/
