/**
 * Created by Administrator on 2014/11/28 0028.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuView = (function (_super) {
    __extends(MenuView, _super);
    function MenuView() {
        _super.call(this);
        this.createSubviews();
    }
    MenuView.prototype.createSubviews = function () {
        this.bgBitMap = new egret.Bitmap();
        this.addChild(this.bgBitMap);
        this.bgBitMap.texture = RES.getRes("menu_item");
        this.bgBitMap.scale9Grid = RES.getRes("menu_item").scale9Grid;
    };
    MenuView.prototype.createItems = function (arr) {
        this.bgBitMap.width = MenuItem.itemWidth + 20;
        this.bgBitMap.height = (MenuItem.itemHeight + 10) * arr.length + 40;
        this.bgBitMap.y = (MacroDefs.stageHeight - this.bgBitMap.height) / 2;
        this.bgBitMap.x = (MacroDefs.stageWidth - this.bgBitMap.width) / 2;
        var count = arr.length;
        for (var i = 0; i < count; i++) {
            var obj = arr[i];
            var item = new MenuItem(obj);
            item.y = this.bgBitMap.y + 20 + i * (MenuItem.itemHeight + 10);
            item.x = (MacroDefs.stageWidth - MenuItem.itemWidth) / 2;
            this.addChild(item);
            this.itemArray.push(item);
        }
    };
    MenuView.prototype.clearItems = function () {
        for (var item in this.itemArray) {
            this.removeChild(item);
        }
        this.itemArray = [];
    };
    MenuView.prototype.show = function () {
    };
    MenuView.prototype.hide = function () {
    };
    MenuView.prototype.menuItemDidTouch = function (scene_id) {
        console.log("did touch scene_id:", scene_id);
    };
    return MenuView;
})(egret.Sprite);
//# sourceMappingURL=MenuView.js.map