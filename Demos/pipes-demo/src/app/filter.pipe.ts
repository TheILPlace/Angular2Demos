import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure: true   /// impure pipe ! because we want change detection when data is changed
                /// inside the items in the array
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }

    //initialize an empty result array
    //we need to create a new array, otherwise NG2 change detection will
    // not see any change in the original array, and will not refresh the display



    let resultArray = [];
    for (let item of value) {

      //warning. if item is an object, and you want to search by one of its
      //properties... use: item.personName and not item['personName']
      //this is because of minification issues

      //find the input argument in the value
      
      if (item.indexOf(args) !== -1)
        resultArray.push(item);


    }
    return resultArray;
  }

}
