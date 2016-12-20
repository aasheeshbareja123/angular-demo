/**
 * Created by aasheesh on 15/12/16.
 */

import { Injectable }     from '@angular/core';
import {Http, Headers} from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class HttpTestService {

  constructor (private http: Http) {

  }

  getCurrentTime() {
return this.http.get('http://date.jsontest.com')


  }

  postJson() {
    var json = JSON.stringify({name:'aasheesh', age:25});
    var params='json=' + json;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post('http://validate.jsontest.com',params, {
      headers: headers
    })
  }

}
