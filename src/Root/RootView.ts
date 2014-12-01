/**
 * Created by Administrator on 2014/11/28 0028.
 */


class RootView extends egret.DisplayObjectContainer {

    public menuView:MenuView;
    public bgview:BgView;
    public dialogBox:DialogBox;
    public roleView:RoleView;

    public constructor() {
        super();
        this.createSubviews();
    }

    public createSubviews():void {
        this.menuView = MenuManager.getInstance().getView();
        this.addChild(this.menuView);



    }
}