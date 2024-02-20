import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ReactiveFormsModule,  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {

  signUpForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder, public apiConnect:ApiConnectionComponent,  private router: Router){

    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')]],

    });
  }

  onSubmit() {

      if (this.signUpForm.valid) {
        // Call the signUpUser method from the ApiConnectionService
        this.apiConnect.signUpUser(
          this.signUpForm.value.userName,
          this.signUpForm.value.email,
          this.signUpForm.value.password
        ).subscribe(response => {
          console.log(response);


        });

        this.successMessage = 'Signup successful';
        this.showSuccessMessage = true;

        this.signUpForm.reset();


          setTimeout(() => {
              this.showSuccessMessage = false;
              this.router.navigate(['auth/login']);
          }, 2000);



    }
     else {
      this.signUpForm.markAllAsTouched();
    }
  }
}



    // onSubmit(form: FormGroup) {
    // console.log('UserName', form.value.userName);
    // console.log('email', form.value.email);
    // console.log('password', form.value.password);
  // }


