export class Entry /*implements IEntry*/ {

  id!: number | undefined;
  name!: string | undefined;
  num!: number | undefined;
  /*
    constructor(data?: IEntry) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(data?: any) {
      if (data) {
          this.id = data["Id"];
          this.name = data["Name"];
          this.num = data["Num"];
      }
    }
    static fromJS(data: any): Entry {
      data = typeof data === 'object' ? data : {};
      let result = new Entry();
      result.init(data);
      return result;
    }

    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["Id"] = this.id;
      data["Name"] = this.name;
      data["Num"] = this.num;
      return data;
  }
  }

  export interface IEntry {
    id: number | undefined;
    name: string | undefined;
    num: number | undefined;*/
}
