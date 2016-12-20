/**
 * Created by aasheesh on 19/12/16.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ellipsis'
})

export class EllipsisFilter implements PipeTransform {

  transform(value:any, args:any[]): any {
    console.log("value" + '   ' + args.length);
    if(value && value.length >= args) {
      return value.substring(0,args)+'...';
    }
    return value;
  }

}

