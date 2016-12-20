import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpTestService} from './http-service';
import {Http, Headers} from '@angular/http'
import  'rxjs/operator/map';
import {SecondComponent} from './second.component'
import {CourseComponent} from './courses.component'



@Component({
  selector: 'my-app',
  template:`<input  #inputval (keyup)="onkeyup(inputval.value)">
  {{dataForEllipsis  | ellipsis:[5,4,3] | uppercase}}

  <p myHighlight> change color</p>`


})



export class AppComponent  {
  //name = 'Learning Angular 2';
  dataForEllipsis: string = '';
  getData : string;
  postData: string;

  parentValue: string;

  ninja = {
    name: 'virat',
    belt:'red'
  }

  onkeyup(value:any) {
    this.dataForEllipsis = value;
}

  //httptestservice = new HttpTestService(new Http());

  constructor() {

  }
/*  myfun = function() {
    alert("hello111");
  }

  yell() {
    alert("I m yelling");
  }
doGet(){
this._httptestservice.getCurrentTime()

  .subscribe( data => this.getData = JSON.stringify(data),
              error => alert(error),
              () => console.log("done"))


}*/

  /*doGet(){
    this._httptestservice.getCurrentTime()
      .subscribe(function(response) {
        this.getData = response;
        },function(err) {
        console.log("error"); },function() {
        console.log("completed");

      }),
      () => console.log("finished");

  }*/
 /* doPost() {
this._httptestservice.postJson()
    .subscribe(data => this.postData = JSON.stringify(data),
              error => alert(error),
              () => console.log("finished"));
  }*/

}


/* <button (click)="myfun(name)" text="clickMe" style="width:100px;height:50px;"> </button>
 <input type="text" #firstName style="margin-top:50px;" (keyup)="0">
 <h2> My name is {{firstName.value}}</h2>
 <a routerLink="/second" routerLinkActive="active">Second Component</a>
 <a routerLink="/first" routerLinkActive="active">FIrst Component</a>
 <router-outlet> </router-outlet>`*/


/*<h2> Courses ........</h2>
<course [test] = "ninja" (onYell) = "yell($event)">Hello World</course>
<button (click)="doGet()" > Test Get Request</button>
<p>
  output: {{getData}}</p>
<button (click)="doPost()" > Test Post Request</button>
<p>
  output: {{postData}} </p>
<a routerLink="/register" routerLinkActive="active">Registration Form</a>
<router-outlet> </router-outlet>*/
