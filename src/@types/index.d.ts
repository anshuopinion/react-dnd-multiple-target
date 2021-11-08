declare interface IItem {
  id: string;
  color: string;
}
declare interface IContainer {
  id: string;
  type: string;
  accept: string[];
  items: IITem[];
}
