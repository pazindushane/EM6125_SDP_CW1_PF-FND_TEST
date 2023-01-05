export class componentDTO {
  private _username: string;
  private _password: string;
  private _status : string;
  private _phoneNo: string;
  private _idPhoto: string;
  private _email: string;
  private _name: string;


  constructor(username: string, password: string, status: string, phoneNo: string, idPhoto: string, email: string, name: string) {
    this._username = username;
    this._password = password;
    this._status = status;
    this._phoneNo = phoneNo;
    this._idPhoto = idPhoto;
    this._email = email;
    this._name = name;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get phoneNo(): string {
    return this._phoneNo;
  }

  set phoneNo(value: string) {
    this._phoneNo = value;
  }

  get idPhoto(): string {
    return this._idPhoto;
  }

  set idPhoto(value: string) {
    this._idPhoto = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
