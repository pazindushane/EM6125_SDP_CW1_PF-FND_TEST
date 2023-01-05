export class StationDTO{
  private _fid: string;
  private _stationName: string;
  private _city: string;
  private _district: string;
  private _max_limit: string;
  private _available_limit: string;
  private _customer_requested_limit: string;
  private _status: string;
  private _station_requested_limit: string;


  constructor(fid: string, stationName: string, city: string, district: string, max_limit: string, available_limit: string, customer_requested_limit: string, status: string, station_requested_limit: string) {
    this._fid = fid;
    this._stationName = stationName;
    this._city = city;
    this._district = district;
    this._max_limit = max_limit;
    this._available_limit = available_limit;
    this._customer_requested_limit = customer_requested_limit;
    this._status = status;
    this._station_requested_limit = station_requested_limit;
  }

  get fid(): string {
    return this._fid;
  }

  set fid(value: string) {
    this._fid = value;
  }

  get stationName(): string {
    return this._stationName;
  }

  set stationName(value: string) {
    this._stationName = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get district(): string {
    return this._district;
  }

  set district(value: string) {
    this._district = value;
  }

  get max_limit(): string {
    return this._max_limit;
  }

  set max_limit(value: string) {
    this._max_limit = value;
  }

  get available_limit(): string {
    return this._available_limit;
  }

  set available_limit(value: string) {
    this._available_limit = value;
  }

  get customer_requested_limit(): string {
    return this._customer_requested_limit;
  }

  set customer_requested_limit(value: string) {
    this._customer_requested_limit = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get station_requested_limit(): string {
    return this._station_requested_limit;
  }

  set station_requested_limit(value: string) {
    this._station_requested_limit = value;
  }
}
