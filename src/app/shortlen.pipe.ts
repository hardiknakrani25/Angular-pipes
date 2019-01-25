import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'shortlen'
})
export class ShortlenPipe implements PipeTransform {
  transform(value: any , size:number) {
    console.log(value, size);
    if (value.length > size) {
      return value.substr(0, size) + ' ...';
    } else {
      return value;
    }


  }

}
