import { IGeo } from './geo';
export interface IAddress {
    street : String;
    suite : String;
    city : String;
    zipcode : String;
    geo:IGeo;
}
