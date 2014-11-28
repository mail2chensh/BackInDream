/**
 * Created by Administrator on 2014/11/28 0028.
 */


interface MenuItemDelegate {
    menuItemDidTouch(scen_id:string):void;
}


class  MenuItem extends egret.Sprite {


    public static itemWidth:number = MacroDefs.stageWidth / 3;
    public static itemHeight:number = MacroDefs.stageHeight / 14;

    public itemObject:MenuItemObject;
    private bgBitMap:egret.Bitmap;
    private content:egret.TextField;
    private delegate:MenuItemDelegate;

    public constructor(obj:MenuItemObject) {
        super();
        this.width = MenuItem.itemWidth;
        this.height = MenuItem.itemHeight;
        this.itemObject = obj;
        this.createSubviews();
    }

    private createSubviews():void {
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
    }

    private onMenuItemTouch(ev:egret.TouchEvent) {
        if (this.delegate) this.delegate.menuItemDidTouch(this.itemObject.scend_id);
    }

}