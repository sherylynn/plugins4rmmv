Game_Player.prototype.checkEventTriggerTouch
DataManager 的一些下载属性其实很适合用来升级
尝试cordova打包，无更新

fadeout 仅仅是创造了黑色的背景精灵 scene 的goto是设置了下一个场景并把上一个场景的激活关闭
Scene_Map 中有 Spriteset_Map
Window_Base()
Scene_Title
Window_Base.prototype.loadWindowskin 窗口外形
Scene_Map.prototype.createDisplayObjects
Spriteset_map.prototype.createCharacters
Scene_Map.prototype.createSpriteset
let x2 =$gameMap.roundXWithDirection(x, d) 距离 方向一个格子  canPass 是通行判定
let y2 =$gameMap.roundYWithDirection(y, d)
$gameSystem.disableMenu() 禁用菜单
Game_Player
Bitmap.prototype.drawCircle
Sprite_Base.prototype.look
eventchaseplayer
Game_Interpreter.prototype
Game_Interpreter.prototype.command101  执行一些命令 比如显示字
Game_CharacterBase.prototype.moveStraight()
7帧 在Game_character中进行一些设定 pattern

还有要在Sprite_Character中

显示图片
$gameScreen.showPicture(1,'老旧昏暗',0,0,0,100,100,255,1) 第一个参数是序号，无意义，第二个参数是图片名字，第三个是origin，然后 x,y 然后缩放，然后透明度，然后blendmode
createPictures
通过这个pictureid导入
Sprite_Picture.prototype.picture = function() {
  return $gameScreen.picture(this._pictureId);
};
Sprite_Picture 就算强行调z值，似乎也不影响上下文?


不同图层靠 this.addChild(this.lowerZLayer = new PIXI.tilemap.ZLayer(this, 0));  这个ZLayer中才有Z值，普通的显示图片是没这个值的，而且和其他图不在一个layer中，就算设定了可能也无效
rmmv中是靠建了lowlayer uplayer来填充sprite的来显示高低
lowerZLayer中又有lowerlayer upperZLayer中又有upperlayer
主角在lowerZlayer中
Scene_Map._spriteset<=Spriteset_Map._tilemap<=ShaderTilemap
SceneManager._scene._spriteset
ScreenZ setPriorityType
SceneManager._scene._spriteset._tilemap.lowerZLayer
_tilemap中先添加了图块。后添加了角色characterSprites。我可以尝试直接添加图片

SceneManager._scene._spriteset._tilemap.lowerZLayer.addChild($fuck.children[0])///唯一成功的把图片添加到lowerZLayer里去

SceneManager._scene._spriteset._tilemap.addChild($fuck.children[0]) //添加到shadertilemap层里

//报错
Spriteset_Base.prototype.createPictures = function() {
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var x = (Graphics.width - width) / 2;
  var y = (Graphics.height - height) / 2;
  this._pictureContainer = new Sprite();
  this._pictureContainer.setFrame(x, y, width, height);
  for (var i = 1; i <= $gameScreen.maxPictures(); i++) {
      let Sprite_Picture_Z=new Sprite_Picture(i)
      Sprite_Picture_Z.z=0
      this._pictureContainer.addChild(Sprite_Picture_Z);
  }
  $fuck=this._pictureContainer
  this.addChild(this._pictureContainer);
};

$fuck就是SceneManager._scene._spriteset._pictureContainer
id 就是 children[id-1]
let $fuck=SceneManager._scene._spriteset._pictureContainer.children[id-1]
$fuck.z=-1
SceneManager._scene._spriteset._tilemap.addChild($fuck)


Spriteset_Base.prototype.createUpperLayer = function() {
  this.createPictures();
  this.createTimer();
  this.createScreenSprites();
};

Spriteset_Map.prototype.createCharacters = function() {
    this._characterSprites = [];
    $gameMap.events().forEach(function(event) {
        this._characterSprites.push(new Sprite_Character(event));
    }, this);
    $gameMap.vehicles().forEach(function(vehicle) {
        this._characterSprites.push(new Sprite_Character(vehicle));
    }, this);
    $gamePlayer.followers().reverseEach(function(follower) {
        this._characterSprites.push(new Sprite_Character(follower));
    }, this);
    this._characterSprites.push(new Sprite_Character($gamePlayer));
    for (var i = 0; i < this._characterSprites.length; i++) {
        this._tilemap.addChild(this._characterSprites[i]);
    }
};

以前都查过，现在又忘记了

擦除图片
$gameScreen.erasePicture(1)  这里是对应id
photoshop blendmode
pixi blendmode -> Graphics.BLEND_MULTIPLY
Graphics.width
Graphics.height 整个画面的宽高
that=this
screenX是屏幕坐标
$gameScreen.showPicture(1,'老旧昏暗',0,9,9,100,100,255,1)
事件触发原理:先Game_CharacterBase.prototype.moveStraight
然后再checkEventTriggerTouchFront
意思是只判断移动的前方

Game_Player.prototype.moveByInput 用户移动判断  更新了群主要求制作的先移动至最近位置后再触发的插件，把移动放在了Game_player类里，如果要直接触发，还是放SceneMap里为佳

$gameTemp.setDestination 即将点击的位置座标
Scene_Map.prototype.processMapTouch 输入判定
$gameTemp._destinationX 是x Y是Y
trigger 从01234开始依次对应rmmv里的事件
event 事件触发  checkEventTriggerTouchFront
Game_Player.prototype.checkEventTriggerHere
//that=this
//$gameScreen.showPicture(1,'老旧昏暗',0,that._self().screenX(),that._self().screenY(),100,100,255,1)



$gameMap $dataMap
$gameMap保存了生成的事件对象, $dataMap保存着事件对象的基础设定属性
$gameMap.prototype.setupEvents()

//Scene_Map
//掌管地图上的元素
SceneManager._scene._spriteset.children[0]
//地图上人物 //单独改变或者 loadTiteset 不改变绘制
SceneManager._scene._spriteset._characterSprites
//删去显示第一个事件
SceneManager._scene._spriteset._tilemap.children.splice(8,1)
SceneManager._scene._spriteset._tilemap.children.splice(4,1)
SceneManager._scene._spriteset._tilemap.children.push(new Sprite_Character($gameMap._events[1]))
Sprite_Character
//一个个删除 除了第一个是确定的背景，其他的似乎是随机的
Input
Game_Event.prototype.clearPageSettings
Game_Event.prototype.update

this._erased = true;
this.refresh();

$gamePlayer

$gameMap._events //return [null,_event]
$gameMap.events() //return [_event]

Game_CharacterBase.prototype.pos = function(x, y) {
  return this._x === x && this._y === y;
};

var sx = this.deltaXFrom(character.x);
var sy = this.deltaYFrom(character.y);

$gameMap.distance

$gameMap 的类和 基类是stage的scene_map不一样

Game_CharacterBase.prototype.setMoveSpeed
Game_CharacterBase.prototype.checkEventTriggerTouchFront = function(d) {
  var x2 = $gameMap.roundXWithDirection(this._x, d);
  var y2 = $gameMap.roundYWithDirection(this._y, d);
  this.checkEventTriggerTouch(x2, y2);
};
Game_Event.prototype.updateSelfMovement
Game_Event.prototype._self()
this.moveAwayFromPlayer()
Game_Event.prototype.moveTypeTowardPlayer = function() {
  if (this.isNearThePlayer()) {
    switch (Math.randomInt(6)) {
      case 0: case 1: case 2: case 3:
      this.moveTowardPlayer();
      break;
      case 4:
        this.moveRandom();
        break;
      case 5:
        this.moveForward();
        break;
    }
  } else {
    this.moveRandom();
  }
};
Scene_Map
//直接跳转到地图
SceneManager.goto(Scene_Map);
//跳转到splash见 scene_splash

{
  "id": Number($dataMap.events.length),
  "name": "EV001",
  "note": "",
  "pages": [
    {
      "conditions": {
        "actorId": 1,
        "actorValid": false,
        "itemId": 1,
        "itemValid": false,
        "selfSwitchCh": "A",
        "selfSwitchValid": false,
        "switch1Id": 1,
        "switch1Valid": false,
        "switch2Id": 1,
        "switch2Valid": false,
        "variableId": 1,
        "variableValid": false,
        "variableValue": 0
      },
      "directionFix": false,
      "image": {
        "tileId": 0,
        "characterName": "Actor3",
        "direction": 2,
        "pattern": 0,
        "characterIndex": 0
      },
      "list": [
        {
          "code": 0,
          "indent": 0,
          "parameters": []
        }
      ],
      "moveFrequency": 3,
      "moveRoute": {
        "list": [
          {
            "code": 0,
            "parameters": []
          }
        ],
        "repeat": true,
        "skippable": false,
        "wait": false
      },
      "moveSpeed": 3,
      "moveType": 0,
      "priorityType": 1,
      "stepAnime": false,
      "through": false,
      "trigger": 0,
      "walkAnime": true
    }
  ],
  "x": 2,
  "y": 6
}
