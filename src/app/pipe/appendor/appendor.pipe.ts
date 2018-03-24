import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: any, position:string,textToAppend:string): any {
    if(input=="")
      return input;
    else
      return position === 'pre' ? textToAppend+input : input+textToAppend;
  }

}
