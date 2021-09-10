export interface IDataService<T> {
  GetAll(): Promise<T>;
  GetSingle(id: string): Promise<T>;
  Create(endpointUrl?: string, body?: T): Promise<T>;
  Update(body: T, endpointUrl: string, id?: string): Promise<T>;
  Delete(id?: string | number): Promise<T>;
}