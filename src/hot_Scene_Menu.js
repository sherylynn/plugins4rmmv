let hot_Scene_Menu = () => {
  ImageManager.loadMenusMain = function (filename) {
    return this.loadBitmap('img/pictures/', filename, 0, true)
  }

  //一个容器，这里可以把菜单背景图片放进来
  let _Scene_Menu_createBackground = Scene_Menu.prototype.createBackground
  let _Scene_Menu_update = Scene_Menu.prototype.update
  Object.assign(Scene_Menu.prototype, {
    createBackground() {
      _Scene_Menu_createBackground.call(this)
      this._field = new Sprite()
      this.addChild(this._field)
    },
    create() {
      Scene_MenuBase.prototype.create.call(this)
      this.createCommandWindow()
      this.createStatusWindow()
      //命令列表
      this._commandWindow.x = 100
      this._commandWindow.y = 120
      this._commandWindow.contents.fontSize = 12
      this._commandWindowOrg = [this._commandWindow.x, this._commandWindow.y]
      this._commandWindow.width = 120
      //角色状态栏
      this._statusWindow.x = 220
      this._statusWindow.y = 120
      this._statusWindow.contents.fontSize = 12
      this._statusWindowOrg = [this._statusWindow.x, this._statusWindow.y]
      this._statusWindow.width = 500
      this._statusWindow.height = 350
      this.createMenuElement()
    },
    //在这里创建和菜单相关的元素
    createMenuElement() {
      this.createLayout()
      this.createLayoutCommand()

    },

    createLayout() {
      this._layout = new Sprite(ImageManager.loadMenusMain('layout'))
      this._field.addChild(this._layout)
    },

    createLayoutCommand() {
      this._layoutCommand = new Sprite(ImageManager.loadMenusMain('LayoutCommand'))
      this._field.addChild(this._layoutCommand)
    },

    updateMenuElement() {
      this.updateLayout()
    },

    updateLayout() {
      this._layoutCommand.x = 100
      this._layoutCommand.y = 120
      this._layoutCommand.opacity = this._commandWindow.contentsOpacity
      this._commandWindow.opacity = 0

      this._statusWindow.opacity = 0

    },

    update() {
      _Scene_Menu_update.call(this)
      if (this._layout) {
        this.updateMenuElement()
      }
    }
  })
}
module.exports = hot_Scene_Menu
