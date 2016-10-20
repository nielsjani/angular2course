export class EventBusArgs {
  type;
  data;

  constructor(type: string, data:any){
    this.type = type;
    this.data = data;
  }
}
