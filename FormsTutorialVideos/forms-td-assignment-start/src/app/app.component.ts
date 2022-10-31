import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ["Fan","Mega Fan", "Plus-Ultra Fan"];
  selectedSub = "Fan";
  @ViewChild('signupForm') sForm:NgForm;

  onSubmit(){
    console.log(this.sForm.value);
  }

}
