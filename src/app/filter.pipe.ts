import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    alert("i am here");
    args = args.toLowercase();
    return value.filter(function(item:any){
      return (item).toLowerCase().includes(args);
    })
  }

}
