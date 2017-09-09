/*
#=============================================================================
# Auto Push NPC
# LeAutoPushNPC.js
# By Lecode
# Version 1.00
#-----------------------------------------------------------------------------
# TERMS OF USE
#-----------------------------------------------------------------------------
# - Credit required
# - Keep this header
# - Contact me for commercial use
#=============================================================================
*/
var Imported = Imported || {};
Imported.Lecode_AutoPushNPC = true;
/*:
 * @plugindesc Replicates a feature on Seiken Densetsu 3 that allow the player
 * to pushs NPC when they obstruct a way.
 * @author Lecode
 * @version 1.0
 *
 * @param Push Delay
 * @desc Delay after a long-press directional button near an event to push it
 * Default: 50
 * @default 50
 *
 * @param Change Image ?
 * @desc Change leader img when he/she's pushing an NPC
 * Default: false
 * @default false
 *
 * @help
 * Plugin Commands:
 *   -> AutoPushNPC ON           ( Enable auto push)
 *   -> AutoPushNPC OFF          ( Disable auto push)
 *   -> AutoPushNPC_Img ON       ( Enable pushing image)
 *   -> AutoPushNPC_Img OFF      ( Disable pushing image)
 *
 * To make an event impossible to <<auto-push>>, add a comment to his list,
 * with this text the following text: Immune_AutoPush
 *
 * Pushing image is in that format: ActorName_Push.
 * Ex: Harold_Push
*/
//#=============================================================================

(function() {

/*-------------------------------------------------------------------------
* Parameters
-------------------------------------------------------------------------*/
var parameters = PluginManager.parameters('LeAutoPushNPC');
var pPushDelay = Number(parameters['Push Delay'] || 50);
var pPushImgEnabled = String(parameters['Change Image ?'] || 'false') === 'true';
var pEnabled = true;
var oldCharaImage = null;
var oldCharaIndex = null;


/*-------------------------------------------------------------------------
* Game_Player
-------------------------------------------------------------------------*/
//---- Check Event Trigger Touch
var oldCheckEventTriggerTouch_method = Game_Player.prototype.checkEventTriggerTouch;
//和接触玩家触发事件无关，和玩家输入按键行走距离有关
Game_Map.prototype.roundXWithDirection = function(x, d) {
    return this.roundX(x + (d === 6 ? 1 : d === 4 ? -1 : 0));
  };
Game_Map.prototype.roundYWithDirection = function(y, d) {
    return this.roundY(y + (d === 2 ? 1 : d === 8 ? -1 : 0));
  };
Game_Player.prototype.checkEventTriggerTouch = function(x, y) {
	oldCheckEventTriggerTouch_method.call(this,x,y);
    if ( !this.isMoving() && this.canStartLocalEvents()) {
        if (!$gameMap.isEventRunning()) {
          //alert(x+'&'+y)
          //this._newX=3
          //this._newY=3
          //alert(this.direction()) 下2左4右6上8
        	$gameMap.eventsXy(x, y).forEach(function(event) {
	        	event.checkAutoPush();
        	});
    	}
    }
};

  Game_Event.prototype.moveTypeTowardPlayer = function() {
    //if (this.isNearThePlayer()) {
    if ((Math.abs(this._realX-$gamePlayer._realX)+Math.abs(this._realY-$gamePlayer._realY))<=8) {
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
      //this.moveRandom();
    }
  };

/*-------------------------------------------------------------------------
* Game_Event
-------------------------------------------------------------------------*/
//----- Initialize
var oldInitialize_method = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
	oldInitialize_method.call(this,mapId,eventId);
	this.leAutoPushTicks = 0;
};

//---- Check Auto Push
Game_Event.prototype.checkAutoPush = function() {
	this.leAutoPushTicks += 3;
	if (this.leAutoPushTicks >= pPushDelay) {
		if ( this.canBeAutoPushed() ) {
    		this.processAutoPush();
    	}
	}
};

//---- Can Be Auto Pushed ?
Game_Event.prototype.canBeAutoPushed = function() {
    if ( this.isMoving() ) { return false; }
    if ( !pEnabled ) { return false; }
    //- Check command
    for(var i = 0; i < this.list().length; i++) {
        var command = this.list()[i];
        if (command && command.code == 108) {
                if (command.parameters[0] == 'Immune_AutoPush') {
                    return false;
                }
            }
        }
    return true;
}

//---- Process Auto Push
Game_Event.prototype.processAutoPush = function() {
    var d = $gamePlayer._direction;
    this.setMovementSuccess(this.canPass(this._x, this._y, d));
    if ( !this.isMovementSucceeded() ) { return; }
    this.moveStraight(d);
    $gamePlayer.moveStraight(d);
    this.onLeAutoPushStart();
};

//---- Update
var oldUpdate_method = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
    oldUpdate_method.call(this,arguments);
    this.leAutoPushTicks -= 1;
    if (this.leAutoPushTicks < 0) { this.leAutoPushTicks = 0; }
};


/*-------------------------------------------------------------------------
* Game_CharacterBase
-------------------------------------------------------------------------*/
//---- Init Members
var oldInitMembers_method = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    oldInitMembers_method.call(this);
    this.leAutoPushFlag = false;
};

//---- Update Move
var oldUpdateMove_method = Game_CharacterBase.prototype.updateMove;
Game_CharacterBase.prototype.updateMove = function() {
    oldUpdateMove_method.call(this);
    if (!this.isMoving() && this.leAutoPushFlag) {
        this.onLeAutoPushEnd();
    }
};

//---- On Auto Push Start
Game_CharacterBase.prototype.onLeAutoPushStart = function() {
    this.leAutoPushFlag = true;
    if (pPushImgEnabled) {
        oldCharaImage = $gameParty.leader()._characterName;
        oldCharaIndex = $gameParty.leader()._characterIndex;
        var fileName = $gameParty.leader().name()+"_Push";
        $gameParty.leader().setCharacterImage(fileName,0);
        $gamePlayer.refresh();
    }
}

//---- On Auto Push End
Game_CharacterBase.prototype.onLeAutoPushEnd = function() {
    this.leAutoPushFlag = false;
    if (pPushImgEnabled) {
        $gameParty.leader().setCharacterImage(oldCharaImage,oldCharaIndex);
        $gamePlayer.refresh();
    }
}


/*-------------------------------------------------------------------------
* Game_Interpreter
-------------------------------------------------------------------------*/
//---- Plugin Command
var old_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    old_pluginCommand.call(this, command, args);
    if (command === 'AutoPushNPC') {
        switch (args[0]) {
        case 'ON':
            pEnabled = true;
            break;
        case 'OFF':
            pEnabled = false;
            break;
        }
    } else if (command === 'AutoPushNPC_Img') {
        switch (args[0]) {
        case 'ON':
            pPushImgEnabled = true;
            break;
        case 'OFF':
            pPushImgEnabled = false;
            break;
        }
    }
};


})();
