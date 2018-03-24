import { ICompany } from './company';
import { IAddress } from './address';
export interface IUser {
    id : Number;
    name : String;
    username : String;
    email : String;
    address : IAddress;
    phone : String;
    website : String;
    company : ICompany;
}
