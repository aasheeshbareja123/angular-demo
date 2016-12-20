/**
 * Created by aasheesh on 7/12/16.
 */

import {Component} from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: "model-driven-form",
  templateUrl: "/app/register.html"
})
export class ModelDrivenForm {
  form: FormGroup;

  myName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "myName": this.myName,
      "mypassword":["", Validators.required]
    });
  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }
  onSubmit(value:any) {
    console.log("form data is " + JSON.stringify({name:'aasheesh'}));
  }

}


