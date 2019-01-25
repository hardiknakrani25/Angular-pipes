import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'shortlen'
})
export class ShortlenPipe implements PipeTransform {
  transform(value: any) {
    console.log(value);
    if (value.length > 10) {
      return value.substr(0, 10) + ' ...';
    } else {
      return value;
    }


  }

}
