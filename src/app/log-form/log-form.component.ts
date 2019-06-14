import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Route} from '@angular/router';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  Logform = this.fb.group({

})
  constructor(private fb: FormBuilder, private route: Route) { }

  ngOnInit() {
  }
 logIn() {
   (this.Logform.value).suscribe(data => {
     console.log(data);
   });
 }
   onSubmit(): void {
     this.logIn();
     this.Logform.reset();
 }
}
