/**
 * Created by Administrator on 2014/11/27 0027.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DialogBox = (function (_super) {
    __extends(DialogBox, _super);
    function DialogBox() {
        _super.call(this);
        this.createSubviews();
    }
    DialogBox.getInstance = function () {
        if (this.instance == null) {
            this.instance = new DialogBox();
        }
        return this.instance;
    };
    DialogBox.prototype.createSubviews = function () {
        this.bgBitMap = new egret.Bitmap();
        this.bgBitMap.texture = RES.getRes("dl_001");
        this.bgBitMap.scale9Grid = RES.getRes("dl_001").scale9Grid;
        this.bgBitMap.width = MacroDefs.stageWidth;
        this.bgBitMap.height = MacroDefs.stageHeight / 4;
        this.bgBitMap.y = MacroDefs.stageHeight - this.bgBitMap.height;
        this.addChild(this.bgBitMap);
        this.bgBitMap.touchEnabled = true;
        this.bgBitMap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.nameField = new egret.TextField();
        this.addChild(this.nameField);
        this.nameField.x = this.bgBitMap.width / 9;
        this.nameField.y = this.bgBitMap.y + this.bgBitMap.height / 3;
        this.nameField.width = this.bgBitMap.width * 7 / 9;
        this.nameField.height = this.bgBitMap.height / 8;
        this.nameField.size = 17;
        this.contentField = new egret.TextField();
        this.addChild(this.contentField);
        this.contentField.x = this.nameField.x;
        this.contentField.y = this.nameField.y + this.nameField.height + 5;
        this.contentField.width = this.nameField.width;
        this.contentField.height = this.bgBitMap.height / 4;
        this.contentField.size = 17;
    };
    DialogBox.prototype.onTouch = function (ev) {
    };
    DialogBox.prototype.showDialogBox = function (roleName, content) {
        //
        DialogBox.getInstance().alpha = 1;
        //
        this.nameField.text = roleName;
        this.contentField.text = content;
    };
    DialogBox.prototype.hide = function () {
        DialogBox.getInstance().alpha = 0;
    };
    DialogBox.instance = null;
    return DialogBox;
})(egret.Sprite);
//# sourceMappingURL=DialogBox.js.map