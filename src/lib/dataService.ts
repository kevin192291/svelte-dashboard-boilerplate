import type { IDataService } from "./interfaces/dataService.interface";

export abstract class DataService<T> implements IDataService<T> {
  private _base: string;

  constructor(protected base: string) {
    this._base = base;
  }

  public async GetAll(endpoint: string = '', filter?: any): Promise<T> {
    const res = await fetch(`${this._base}${endpoint ? '/' : ''}${endpoint ? endpoint : ''}${filter ? filter : ''}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': '',
      },
    });

    return res.json() as Promise<T>;
  }

  public async GetSingle(endpoint: string = '', id?: string): Promise<T> {
    const res = await fetch(`${this._base}${(endpoint && endpoint !== '') ? '/' : ''}${endpoint}${(id && !id.toString().includes('?')) ? '/' : ''}${id ? id : ''}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': '',
      },
    });

    return res.json() as Promise<T>;
  }

  public async Create(endpoint: string = '', body?: any): Promise<T> {
    const res = await fetch(`${this._base}${endpoint ? '/' : ''}${endpoint ? endpoint : ''}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': '',
      },
      body: JSON.stringify(body),
    });
    return res.json() as Promise<T>;
  }

  public async Update(
    body: any,
    endpoint: string = '',
    id?: string | number,
  ): Promise<T> {
    const res = await fetch(`${this._base}${endpoint ? '/' : ''}${endpoint}${id ? '/' : ''}${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': '',
      },
      body: JSON.stringify(body),
    });
    return res.json() as Promise<T>;
  }

  public async Delete(id?: string | number): Promise<T> {
    const res = await fetch(`${this._base}${id ? '/' : ''}${id ? id : ''}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': '',
      },
    });
    return res.json() as Promise<T>;
  }
}