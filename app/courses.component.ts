/**
 * Created by aasheesh on 6/12/16.
 */

import { Component } from '@angular/core';

@Component({
  selector:'course1',
  template: `
  <h2> I am first component.*********** </h2> `,
  inputs:['parentValue']
})

export class CourseComponent {

  parentValue : string;

  courses = ['course1', 'course2', 'course3'];

}
