/**
 * Created by Administrator on 2014/11/28 0028.
 */

class BgViewManager {

    private static instance:BgViewManager = null;
    private bgView:BgView;
    private sceneIDArray:Array<any>;

    public static getInstance():BgViewManager {
        if (this.instance == null) {
            this.instance = new BgViewManager();
        }
        return this.instance;
    }

    public constructor() {
        super();
        bgview = new BgView();
        this.loadStartScene();
        this.sceneIDArray = new Array();
    }

    public getBgView():BgView {
        return this.bgView;
    }

    public loadStartScene():void {
        this.loadScene("0001");
    }

    public loadScene(bg_id:string):void {
        this.bgView.loadScene(bg_id);
    }

    public loadResource():void {

    }


}