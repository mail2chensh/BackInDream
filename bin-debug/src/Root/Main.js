var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Main.prototype.onAddToStage = function (event) {
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     */
    Main.prototype.createGameScene = function () {
        MacroDefs.stageWidth = this.stage.stageWidth;
        MacroDefs.stageHeight = this.stage.stageHeight;
        var rootController = new RootController(this);
        rootController.run();
        //var sky:egret.Bitmap = this.createBitmapByName("bgImage");
        //this.addChild(sky);
        //var stageW:number = this.stage.stageWidth;
        //var stageH:number = this.stage.stageHeight;
        //sky.width = stageW;
        //sky.height = stageH;
        //
        //var topMask:egret.Shape = new egret.Shape();
        //topMask.graphics.beginFill(0x000000, 0.5);
        //topMask.graphics.drawRect(0, 0, stageW, stageH);
        //topMask.graphics.endFill();
        //topMask.width = stageW;
        //topMask.height = stageH;
        //this.addChild(topMask);
        //
        //var icon:egret.Bitmap = this.createBitmapByName("egretIcon");
        //icon.anchorX = icon.anchorY = 0.5;
        //this.addChild(icon);
        //icon.x = stageW / 2;
        //icon.y = stageH / 2 - 60;
        //icon.scaleX = 0.55;
        //icon.scaleY = 0.55;
        //
        //var colorLabel:egret.TextField = new egret.TextField();
        //colorLabel.x = stageW / 2;
        //colorLabel.y = stageH / 2 + 50;
        //colorLabel.anchorX = colorLabel.anchorY = 0.5;
        //colorLabel.textColor = 0xffffff;
        //colorLabel.textAlign = "center";
        //colorLabel.text = "Hello Egret";
        //colorLabel.size = 20;
        //this.addChild(colorLabel);
        //
        //var textContainer:egret.Sprite = new egret.Sprite();
        //textContainer.anchorX = textContainer.anchorY = 0.5;
        //this.addChild(textContainer);
        //textContainer.x = stageW / 2;
        //textContainer.y = stageH / 2 + 100;
        //textContainer.alpha = 0;
        //
        //this.textContainer = textContainer;
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        //RES.getResAsync("description",this.startAnimation,this)
    };
    return Main;
})(egret.DisplayObjectContainer);
//# sourceMappingURL=Main.js.map