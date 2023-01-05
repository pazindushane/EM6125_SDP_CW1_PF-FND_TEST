
export class NavDTO{
  menuName:string;
  url:string;
  icon:string;
  list:NavDTO [];

  constructor(menuName: string, url: string, icon: string, list: NavDTO[]) {
    this.menuName = menuName;
    this.url = url;
    this.icon = icon;
    this.list = list;
  }
}
