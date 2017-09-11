/*
////
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
      this._desireFinishTick=120
      this._finishTick=0
      this._playerSpeed=2
      this._playerBullets=[]
      this._enemyTanks=[]
      this._enemyBullets=[]
      this._explodes=[]
    }
    checkIn(a,b){
      return (a.x>=(b.x-b.width/2)&&
      a.x<=(b.x+b.width/2)&&
      a.y>=(b.y-b.height/2)&&
      a.y<=(b.y+b.height/2))
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
        for (let j =this._enemyTanks.length-1;j>=0;j--){
          if(this._enemyTanks[j].state!=Tank_State.Live) continue
          if(this.checkIn(this._playerBullets[i],this._enemyTanks[j])
          ){
            let deadBullet=this._playerBullets.splice(i,1)[0]
            this.removeChild(deadBullet)
            this._enemyTanks[j].hurt(1)
            if(this._enemyTanks[j].hp<=0){
              this._eliminatedEnemy++
              this._isGameOver=(this._eliminatedEnemy>= this._maxEnemyCount)
              this.createExplode(this._enemyTanks[j].x,this._enemyTanks[j].y)
              AudioManager.playSe({
                name:'Explosion1',
                pan:0,
                pitch:100,
                volume:100
              })
            }
            break
          }
        }
      }
      for (let i=this._enemyTanks.length-1;i>=0;i--){
        if(this._enemyTanks[i].state==Tank_State.Dead){
          let deadTank=this._enemyTanks.splice(i,1)[0]
          this.removeChild(deadTank)
        }
      }
      if(!this._isGameOver){
        for(let i in this._enemyTanks){
          if(this._enemyTanks[i].canFire){
            let bullet=this._enemyTanks[i].fire(this._bulletRedTexture)
            this._enemyBullets.push(bullet)
            this.addChild(bullet)
          }
        }
      }
      for(let i=this._enemyBullets.length-1;i>=0;i--){
        if(this._enemyBullets[i].x>=Graphics.boxWidth||
        this._enemyBullets[i].x<=0||
        this._enemyBullets[i].y>=Graphics.boxHeight||
        this._enemyBullets[i].y<=0){
          let outBullet=this._enemyBullets.splice(i,1)[0]
          this.removeChild(outBullet)
        }
      }
      for(let i=this._enemyBullets.length-1;i>=0;i--){
        if(this.checkIn(this._enemyBullets[i],this._player)){
          let deadBullet=this._enemyBullets.splice(i,1)[0]
          this.removeChild(deadBullet)
          this._player.hurt(1)
          if(this._player.hp<=0){
            this.createExplode(this._player.x,this._player.y)
            AudioManager.playSe({
              name:'Explosion1',
              pan:0,
              pitch:100,
              volume:100
            })
          }else{
            AudioManager.playSe({
              name:'Shot2',
              pan:0,
              pitch:100,
              volume:100
            })
          }
          break
        }
      }
      if(!this._isGameOver&&this._player.state==Tank_State.Dead){
        this.removeChild(this._player)
        AudioManager.playSe({
          name:'TankWarLost',
          pan:0,
          pitch:100,
          volume:100
        })
        this._isGameOver=true
        for(let i in this._enemyTanks){
          this._enemyTank[i].isStop=true
        }
      }
      for (let i=this._explodes.length-1;i>=0;i--){
        if(this._explodes[i].isFinished){
          let explode=this._explodes.splice(i,1)[0]
          this.removeChild(explode)
        }
      }
      if(this._isGameOver){
        this._finishTick++
        if(this._finishTick>=this._desireFinishTick){
          let isWin=(this._player.state==Tank_State.Live)
          SceneManager.push(Scene_TankWarTirle)
          //SceneManager.push(Scene_TankWarGameOver)
          //SceneManager.prepareNextScene(isWin)
        }
      }
    }
  }
  window.Scene_TankWar=Scene_TankWar
}
module.export=hot_Scene_TankWar
//*/
