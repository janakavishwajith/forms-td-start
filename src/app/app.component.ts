import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';  
  yourAnswer = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }

  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer:'Kenny',
    //   gender:'female'

    // });

    this.signUpForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.question = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.submitted = true;

    this.signUpForm.reset();

  }
}
