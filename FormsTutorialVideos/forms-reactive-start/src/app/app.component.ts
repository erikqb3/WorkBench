import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
// import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['asdf','xzy'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), //bind, binds this to the class and not the function
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
    this.signupForm.valueChanges.subscribe(
      (value)=>console.log(value)
    )
    this.signupForm.statusChanges.subscribe(
      (status)=>console.log(status)
    )
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@text.com'
      },
      'gender':'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'asdf'
      }
    });

  }
  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // getControls(){
  //   return(<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl) : {[s : string] : boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
