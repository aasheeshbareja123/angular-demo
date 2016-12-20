import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {ReactiveFormsModule} from "@angular/forms";
import {ModelDrivenForm} from './form.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {EllipsisFilter} from './ellipsisfilter';
import {HighlightDirective} from './highlight.directive';




/*const appRoutes: Routes = [
  { path: 'first', component: CourseComponent },
  { path: 'second', component: SecondComponent },
  {path: 'register', component: ModelDrivenForm}
];*/

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  JsonpModule

  ],
  declarations: [ AppComponent, ModelDrivenForm,EllipsisFilter, HighlightDirective
  ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
