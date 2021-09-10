import { DataService } from "$lib/dataService";
import type { Devices } from "$lib/interfaces/device.interface";

export class DevicesApi extends DataService<Devices> {
  constructor() {
    super('http://jsonplaceholder.typicode.com/todos/1');
  }

}