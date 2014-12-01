/**
 * Created by Administrator on 2014/11/28 0028.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RootView = (function (_super) {
    __extends(RootView, _super);
    function RootView() {
        _super.call(this);
        this.createSubviews();
    }
    RootView.prototype.createSubviews = function () {
        this.menuView = MenuManager.getInstance().getView();
        this.addChild(this.menuView);
    };
    return RootView;
})(egret.DisplayObjectContainer);
//# sourceMappingURL=RootView.js.map