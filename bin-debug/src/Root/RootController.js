/**
 * Created by Administrator on 2014/11/28 0028.
 */
var IDType;
(function (IDType) {
    IDType[IDType["Menu"] = 1] = "Menu";
    IDType[IDType["BgView"] = 2] = "BgView";
    IDType[IDType["Role"] = 3] = "Role";
    IDType[IDType["DialogBox"] = 4] = "DialogBox";
})(IDType || (IDType = {}));
var RootController = (function () {
    function RootController(parentView) {
        this.rootView = new RootView();
        parentView.stage.addChild(this.rootView);
    }
    RootController.prototype.run = function () {
        MenuManager.getInstance().loadResource();
        //RES.getResAsync("flowConfig", this.loadFlowConfigComplete, this);
    };
    RootController.prototype.loadFlowConfigComplete = function (result) {
        this.sceneIDArr = [];
        this.IDIndex = 0;
        for (var i = 0; i < result.length; i++) {
            var scene_id = result[i];
            this.sceneIDArr.push(scene_id);
        }
        this.loadSceneID();
    };
    RootController.prototype.loadSceneID = function () {
        var scene_id = this.sceneIDArr[this.IDIndex];
        this.parseSceneIDType(scene_id);
    };
    RootController.prototype.parseSceneIDType = function (scend_id) {
        var head = scend_id.substr(0, 2);
        console.log("head: ", head);
        switch (parseInt(head)) {
            case 1 /* Menu */:
                // RoleManager.getInstance().hide();
                // DialogBoxManager.getInstance().hide();
                MenuManager.getInstance().show();
                MenuManager.getInstance().loadMenuID(scend_id);
                break;
            case 2 /* BgView */:
                break;
            case 3 /* Role */:
                break;
            case 4 /* DialogBox */:
                break;
            default:
                break;
        }
    };
    return RootController;
})();
//# sourceMappingURL=RootController.js.map