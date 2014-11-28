/**
 * Created by Administrator on 2014/11/27 0027.
 */

class BgView extends egret.Sprite {

    private bgBitMap : egret.Bitmap;
    private bgTexture : egret.Texture;

    public constructor() {
        super();
        this.createSubviews();
    }

    private createSubviews():void {
        this.bgBitMap = new egret.Bitmap();
        this.addChild(this.bgBitMap);
        this.bgBitMap.width = this.stage.stageWidth;
        this.bgBitMap.height = this.stage.stageHeight;
        this.loadStartScene();
    }

    public loadScene(bg_id:string):void {
        var fileName : string = "bg_" + bg_id;
        this.bgTexture = RES.getRes(fileName);
        this.bgBitMap.texture = this.bgTexture;
    }

}