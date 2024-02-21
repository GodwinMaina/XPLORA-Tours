import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { CommonModule } from '@angular/common';
import { createTourInterface } from '../../interfaces/createTour';
import { createInterface } from 'readline';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})



export class AdminPageComponent {

  myTours:createTourInterface[]=[];

constructor(private router: Router, public apiConnect:ApiConnectionComponent) {

this.apiConnect.getAllTours().subscribe(
  response=>{
  console.log(response);

 this.myTours = response.message

//  console.log(this.myTours);

})

  }

    navigateToAddTours() {
    this.router.navigate(['/addTours']);
}

}
