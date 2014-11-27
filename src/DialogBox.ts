/**
 * Created by Administrator on 2014/11/27 0027.
 */

class DialogBox extends egret.Sprite {

    private static instance:DialogBox = null;

    private bgBitMap:egret.Bitmap;
    private nameField:egret.TextField;
    private contentField:egret.TextField;

    public static getInstance():DialogBox {
        if (this.instance == null) {
            this.instance = new DialogBox();
        }
        return this.instance;
    }

    public constructor() {
        super();
        this.createSubviews();
    }

    private createSubviews():void {

        this.bgBitMap = new egret.Bitmap();
        this.bgBitMap.texture = RES.getRes("dl_001");
        this.bgBitMap.scale9Grid = RES.getRes("dl_001").scale9Grid;
        this.bgBitMap.width = MacroDefs.stageWidth;
        this.bgBitMap.height = MacroDefs.stageHeight / 4;
        this.bgBitMap.y = MacroDefs.stageHeight - this.bgBitMap.height;
        this.addChild(this.bgBitMap);

        this.bgBitMap.touchEnabled = true;
        this.bgBitMap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.nameField = new egret.TextField();
        this.addChild(this.nameField);
        this.nameField.x = this.bgBitMap.width / 9;
        this.nameField.y = this.bgBitMap.y + this.bgBitMap.height / 3;
        this.nameField.width = this.bgBitMap.width * 7 / 9;
        this.nameField.height = this.bgBitMap.height / 8;
        this.nameField.size = 17;

        this.contentField = new egret.TextField();
        this.addChild(this.contentField);
        this.contentField.x = this.nameField.x;
        this.contentField.y = this.nameField.y + this.nameField.height + 5;
        this.contentField.width = this.nameField.width;
        this.contentField.height = this.bgBitMap.height / 4;
        this.contentField.size = 17;
    }


    index:number = 1;
    private onTouch(ev:egret.TouchEvent) {
        this.nameField.text = this.index.toString();
        this.index ++;
    }
}