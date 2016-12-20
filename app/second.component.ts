/**
 * Created by aasheesh on 6/12/16.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector:'course',
  template: `<p>{{test.name}} </p>
  <p>{{test.belt}}</p>
  <button (click)="fireYellEvent($event)">Hit Me</button>

  `,
  inputs:['']
})

export class SecondComponent {

  courses = ['course1', 'course2', 'course3'];
  @Input() test: any;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: any) {
    this.onYell.emit(e);
    console.log(e);

  }

}


/*
<h2> Courses</h2>
<ul>
  <li *ngFor='let course of courses'>
  {{course}}
</li>
</ul>*/
