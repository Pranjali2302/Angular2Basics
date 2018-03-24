import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: IUser[], args?: any): any {
    return input.filter(user => +user.id % 2 === 0)
  }

}
