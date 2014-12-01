/**
 * Created by Administrator on 2014/11/28 0028.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(obj) {
        _super.call(this);
        this.width = MenuItem.itemWidth;
        this.height = MenuItem.itemHeight;
        this.itemObject = obj;
        this.createSubviews();
    }
    MenuItem.prototype.createSubviews = function () {
        this.bgBitMap = new egret.Bitmap();
        this.addChild(this.bgBitMap);
        this.bgBitMap.texture = RES.getRes("menu_item");
        this.bgBitMap.scale9Grid = RES.getRes("menu_item").scale9Grid;
        this.bgBitMap.width = MenuItem.itemWidth;
        this.bgBitMap.height = MenuItem.itemHeight;
        this.bgBitMap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuItemTouch, this);
        this.content = new egret.TextField();
        this.content.width = MenuItem.itemWidth;
        this.content.height = MenuItem.itemHeight;
        this.content.textAlign = "center";
        this.content.size = 18;
        this.content.text = this.itemObject.content;
        this.addChild(this.content);
    };
    MenuItem.prototype.onMenuItemTouch = function (ev) {
        if (this.delegate)
            this.delegate.menuItemDidTouch(this.itemObject.scend_id);
    };
    MenuItem.itemWidth = MacroDefs.stageWidth / 3;
    MenuItem.itemHeight = MacroDefs.stageHeight / 14;
    return MenuItem;
})(egret.Sprite);
//# sourceMappingURL=MenuItem.js.map