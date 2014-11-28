/**
 * Created by Administrator on 2014/11/28 0028.
 */

class RootController {

    private rootView:RootView;

    public constructor(parentView:egret.DisplayObjectContainer) {
        super();

        this.rootView = new RootView();
        parentView.stage.addChild(this.rootView);
        
    }

    public run() {

    }

}