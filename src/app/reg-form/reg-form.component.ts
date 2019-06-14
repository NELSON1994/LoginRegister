import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator} from '@angular/forms';
import {Route} from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  Regform = this.fb.group({
    name: ['', [Validator.required]],
    sname: ['', [Validator.required]]
  })
  constructor(private fb: FormBuilder,
              private route: Route) { }

  ngOnInit() {
  }
regUser() {
  (this.Regform.value).subscribe(data => {
    console.log(data);
  });
}
onSubmit(): void {
    this.regUser();
    this.Regform.reset();
}

}
