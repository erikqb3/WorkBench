import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signupForm: NgForm; //alternative way
defaultQuestion = "pet";
answer = '';
genders = ['male', 'female'];
user = { //key names aren't direcly connected to HTML form
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
}
submitted = false;


  suggestUserName() {
    const suggestedName = 'Honest';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: "",
    //   gender: 'male'
    // }); //works, but not best way
    this.signupForm.form.patchValue({ //setValue sets whole form, patchValue overrides parts of form
      userData: {
        username: suggestedName
      }
    })
  }
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    
    this.signupForm.reset();
  }
  
}
