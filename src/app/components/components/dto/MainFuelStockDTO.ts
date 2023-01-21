export class MainFuelStockDTO{
  private _mfs_id: string;
  private _status: string;
  private _available_limit : string;
  private _requested_limit: string;
  private _main_stock: string;

  constructor(mfs_id: string, status: string, available_limit: string, requested_limit: string, main_stock: string) {
    this._mfs_id = mfs_id;
    this._status = status;
    this._available_limit = available_limit;
    this._requested_limit = requested_limit;
    this._main_stock = main_stock;
  }

  get mfs_id(): string {
    return this._mfs_id;
  }

  set mfs_id(value: string) {
    this._mfs_id = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get available_limit(): string {
    return this._available_limit;
  }

  set available_limit(value: string) {
    this._available_limit = value;
  }

  get requested_limit(): string {
    return this._requested_limit;
  }

  set requested_limit(value: string) {
    this._requested_limit = value;
  }

  get main_stock(): string {
    return this._main_stock;
  }

  set main_stock(value: string) {
    this._main_stock = value;
  }
}
