export class TokenDTO{
  private _tid: string;
  private _vehicleRegNo: string;
  private _status: string;
  private _tokenExpDate: string;
  private _requestQuota: string;
  private _fillingTimeAndDate: string;
  private _username: any[];


  constructor(tid: string, vehicleRegNo: string, status: string, tokenExpDate: string, requestQuota: string, fillingTimeAndDate: string, username: any[]) {
    this._tid = tid;
    this._vehicleRegNo = vehicleRegNo;
    this._status = status;
    this._tokenExpDate = tokenExpDate;
    this._requestQuota = requestQuota;
    this._fillingTimeAndDate = fillingTimeAndDate;
    this._username = username;
  }

  get tid(): string {
    return this._tid;
  }

  set tid(value: string) {
    this._tid = value;
  }

  get vehicleRegNo(): string {
    return this._vehicleRegNo;
  }

  set vehicleRegNo(value: string) {
    this._vehicleRegNo = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get tokenExpDate(): string {
    return this._tokenExpDate;
  }

  set tokenExpDate(value: string) {
    this._tokenExpDate = value;
  }

  get requestQuota(): string {
    return this._requestQuota;
  }

  set requestQuota(value: string) {
    this._requestQuota = value;
  }

  get fillingTimeAndDate(): string {
    return this._fillingTimeAndDate;
  }

  set fillingTimeAndDate(value: string) {
    this._fillingTimeAndDate = value;
  }

  get username(): any[] {
    return this._username;
  }

  set username(value: any[]) {
    this._username = value;
  }
}
