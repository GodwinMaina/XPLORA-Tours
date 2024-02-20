import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { response } from 'express';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, public apiConnect:ApiConnectionComponent, private router:Router){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');

      this.apiConnect.loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe(response=>{
        console.log(response);
        console.log('happy')

        //isAdmin  also part of response
        const isAdmin = response.isAdmin
        const errors = response.error

       if(isAdmin){
         //admin only 1 person set in db
        this.router.navigate(['/admin']);
        this.loginForm.reset();
      }

      else{
        this.router.navigate(['/users']);
      }
    })

    // this.loginForm.reset();

    }

    else {
      console.log('Form has errors');

    }
}

}

