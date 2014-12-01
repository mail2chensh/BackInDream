/**
 * Created by Administrator on 2014/11/27 0027.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BgView = (function (_super) {
    __extends(BgView, _super);
    function BgView() {
        _super.call(this);
        this.createSubviews();
    }
    BgView.prototype.createSubviews = function () {
        this.bgBitMap = new egret.Bitmap();
        this.addChild(this.bgBitMap);
        this.bgBitMap.width = this.stage.stageWidth;
        this.bgBitMap.height = this.stage.stageHeight;
    };
    BgView.prototype.loadScene = function (bg_id) {
        var fileName = "bg_" + bg_id;
        this.bgTexture = RES.getRes(fileName);
        this.bgBitMap.texture = this.bgTexture;
    };
    return BgView;
})(egret.Sprite);
//# sourceMappingURL=BgView.js.map