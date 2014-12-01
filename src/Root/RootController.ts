/**
 * Created by Administrator on 2014/11/28 0028.
 */

enum IDType {
    Menu = 1,
    BgView,
    Role,
    DialogBox
}


class RootController {


    private rootView:RootView;
    private sceneIDArr:Array<any>;
    private IDIndex:number;

    public constructor(parentView:egret.DisplayObjectContainer) {

        this.rootView = new RootView();
        parentView.stage.addChild(this.rootView);

    }

    public run():void {
        RES.getResAsync("flowConfig", this.loadFlowConfigComplete, this);
    }

    private loadFlowConfigComplete(result:Array<any>):void {
        this.sceneIDArr = [];
        this.IDIndex = 0;
        for(var i:number = 0; i < result.length ; i++) {
            var scene_id:string = result[i];
            this.sceneIDArr.push(scene_id);
        }
        this.loadSceneID();
    }

    private loadSceneID():void {
        var scene_id:string = this.sceneIDArr[this.IDIndex];
        this.parseSceneIDType(scene_id);


    }

    private parseSceneIDType(scend_id:string) {
        var head:string = scend_id.substr(0, 2);
        console.log("head: ", head);
        switch (parseInt(head)) {
            case IDType.Menu:
                // RoleManager.getInstance().hide();
                // DialogBoxManager.getInstance().hide();
                MenuManager.getInstance().loadMenuID(scend_id);
                break;
            case IDType.BgView:
                break;
            case IDType.Role:
                // RoleManager.getInstance().show();

                break;
            case IDType.DialogBox:
                // RoleManager.getInstance().show();
                break;
            default :
                break;
        }
    }



}