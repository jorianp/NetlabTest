import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup;

  data = JSON.parse(localStorage.getItem('data'));

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      select: new FormControl(''),
      area: new FormControl('')
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value};
      localStorage.setItem('data', JSON.stringify(formData));
      console.log(formData);
    }
  }
}
