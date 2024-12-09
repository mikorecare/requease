import { Timestamp } from "firebase/firestore";

export class ARUser {
  public get address(): string {
    return this._address;
  }

  public get birthday(): string {
    return this._birthday;
  }

  public get createdOn(): Date {
    return this._createdOn instanceof Timestamp ? this._createdOn.toDate() : new Date(this._createdOn);
  }

  public get deletedOn(): Date | null {
    return this._deletedOn;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get isBlacklisted(): boolean {
    return this._isBlacklisted;
  }

  public get isDeleted(): boolean {
    return this._isDeleted;
  }

  public get isVerified(): boolean {
    return this._isVerified;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public get userEmail(): string {
    return this._userEmail;
  }

  public get validIdLink(): string {
    return this._validIdLink;
  }

  public get violationCount(): number {
    return this._violationCount;
  }

  public get yearsOfResidence(): string {
    return this._yearsOfResidence;
  }

  private _address: string;
  private _birthday: string;
  private _createdOn: Date;
  private _deletedOn: Date | null;
  private _firstName: string;
  private _isBlacklisted: boolean;
  private _isDeleted: boolean;
  private _isVerified: boolean;
  private _lastName: string;
  private _phoneNumber: string;
  private _userEmail: string;
  private _validIdLink: string;
  private _violationCount: number;
  private _yearsOfResidence: string;

  constructor(
    address: string,
    birthday: string,
    createdOn: Date,
    deletedOn: Date | null,
    firstName: string,
    isBlacklisted: boolean,
    isDeleted: boolean,
    isVerified: boolean,
    lastName: string,
    phoneNumber: string,
    userEmail: string,
    validIdLink: string,
    violationCount: number,
    yearsOfResidence: string
  ) {
    this._address = address;
    this._birthday = birthday;
    this._createdOn = createdOn;
    this._deletedOn = deletedOn;
    this._firstName = firstName;
    this._isBlacklisted = isBlacklisted;
    this._isDeleted = isDeleted;
    this._isVerified = isVerified;
    this._lastName = lastName;
    this._phoneNumber = phoneNumber;
    this._userEmail = userEmail;
    this._validIdLink = validIdLink;
    this._violationCount = violationCount;
    this._yearsOfResidence = yearsOfResidence;
  }
}
