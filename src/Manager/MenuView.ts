/**
 * Created by Administrator on 2014/11/28 0028.
 */



class  MenuView extends egret.Sprite implements MenuItemDelegate{

    private bgBitMap:egret.Bitmap;
    private itemArray:Array<MenuItem>;


    public constructor() {
        super();
        this.createSubviews();
    }

    private createSubviews():void {
        this.bgBitMap = new egret.Bitmap();
        this.addChild(this.bgBitMap);
        this.bgBitMap.texture = RES.getRes("menu_item");
        this.bgBitMap.scale9Grid = RES.getRes("menu_item").scale9Grid;
    }


    public createItems(arr:Array<any>):void {
        this.bgBitMap.width = MenuItem.itemWidth + 20;
        this.bgBitMap.height = (MenuItem.itemHeight + 10) * arr.length + 40;
        this.bgBitMap.y = (MacroDefs.stageHeight - this.bgBitMap.height) / 2;
        this.bgBitMap.x = (MacroDefs.stageWidth - this.bgBitMap.width) / 2;

        var count:number = arr.length;
        for(var i:number = 0; i < count; i++) {
            var obj:any = arr[i];
            var item:MenuItem = new MenuItem(obj);
            item.y = this.bgBitMap.y + 20 + i * (MenuItem.itemHeight + 10);
            item.x = (MacroDefs.stageWidth - MenuItem.itemWidth) / 2;
            this.addChild(item);
            this.itemArray.push(item);
        }

    }


    public clearItems() {
        for (var item in this.itemArray) {
            this.removeChild(item);
        }
        this.itemArray = [];
    }

    public show():void {

    }

    public hide():void {

    }

    public menuItemDidTouch(scene_id:string):void {
        console.log("did touch scene_id:",scene_id);

    }




}