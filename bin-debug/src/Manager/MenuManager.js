/**
 * Created by Administrator on 2014/11/28 0028.
 */
var MenuManager = (function () {
    function MenuManager() {
        this.menuView = new MenuView();
    }
    MenuManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MenuManager();
        }
        return this.instance;
    };
    MenuManager.prototype.getView = function () {
        return this.menuView;
    };
    MenuManager.prototype.loadResource = function () {
        RES.getResAsync("description", this.loadResourceComplete, this);
    };
    MenuManager.prototype.loadResourceComplete = function (result) {
        this.menuDict = new Array();
        for (var dictKey in result) {
            // 生成新的列表存放menuItemObj对象
            var dataArr = new Array();
            var objList = result[dictKey];
            for (var i = 0; i < objList.lenght; i++) {
                var obj = objList[i];
                var itemObj = new MenuItemObject();
                itemObj.scend_id = obj["scene_id"];
                itemObj.content = obj["content"];
                dataArr.push(itemObj);
            }
            this.menuDict[dictKey] = dataArr;
        }
    };
    MenuManager.prototype.loadMenuID = function (menu_id) {
        if (this.menuDict[menu_id] == null) {
            console.log("loadMenuId exception: donot have this key :", menu_id);
            return;
        }
        var dataArr = this.menuDict[menu_id];
        this.menuView.createItems(dataArr);
        this.showView();
    };
    MenuManager.prototype.hideView = function () {
        this.menuView.hide();
    };
    MenuManager.prototype.showView = function () {
        this.menuView.show();
    };
    MenuManager.instance = null;
    return MenuManager;
})();
//# sourceMappingURL=MenuManager.js.map