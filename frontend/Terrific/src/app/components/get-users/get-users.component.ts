import { Component } from '@angular/core';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { response } from 'express';
import { Console, log } from 'console';
import { signUserInterface } from '../../interfaces/signUser';
import { CommonModule } from '@angular/common';
ApiConnectionComponent

@Component({
  selector: 'app-get-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-users.component.html',
  styleUrl: './get-users.component.css'
})
export class GetUsersComponent {

  user:signUserInterface[]=[]

  constructor (public apiConnect:ApiConnectionComponent){

  this.apiConnect.getAllUsers().subscribe(
    response=>{
      console.log(response);
      // const username = response.message;
      // console.log(username)

      this.user=response.message
      // console.log(email);


    })
  }


  sendEmail(email: string) {
  // Replace this with your email sending logic
  window.location.href = `mailto:${email}`;
}

}
