/**
 * Created by Administrator on 2014/11/28 0028.
 */


class MenuManager {

    private static instance:MenuManager = null;

    private menuView:MenuView;
    private menuDict:Array<any>; //字典，value值是menuItemObj数组

    public static getInstance():MenuManager {
        if (this.instance == null) {
            this.instance = new MenuManager();
        }
        return this.instance;
    }

    public constructor() {
        super();
        this.menuView = new MenuView();
    }


    public getView():MenuView {
        return this.menuView;
    }

    public loadResource():void {
        RES.getResAsync("description",this.loadResourceComplete,this)
    }

    private loadResourceComplete(result:Array<any>):void {
        this.menuDict = new Array();
        var keys:Array<string> = result[keys];
        for (var dictKey:string in keys) {
            // 生成新的列表存放menuItemObj对象
            var dataArr:Array<any> = new Array();
            var objList:any = result[dictKey];

            for (var i:number = 0; i < objList.lenght; i++) {
                var obj:any = objList[i];
                var itemObj:MenuItemObject = new MenuItemObject();
                itemObj.scend_id = obj["scene_id"];
                itemObj.content = obj["content"];
                dataArr.push(itemObj);
            }
            this.menuDict[dictKey] = dataArr;
        }
    }

    public loadMenuID(menu_id:string) {
        if (this.menuDict[menu_id] == null) {
            console.log("loadMenuId exception: donot have this key :",menu_id);
            return;
        }
        var dataArr:Array<MenuItemObject> = this.menuDict[menu_id];

        this.menuView.createItems(dataArr);
        this.showView();
    }

    public hideView():void {
        this.menuView.hide();
    }

    public showView():void {
        this.menuView.show();
    }

}