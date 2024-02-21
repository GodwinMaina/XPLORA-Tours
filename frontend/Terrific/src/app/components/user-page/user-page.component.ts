import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { createTourInterface } from '../../interfaces/createTour';
import { Router } from '@angular/router';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
ApiConnectionComponent
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  tour: any;

  // bookedTours: string[] = [];
  myTours:createTourInterface[]=[];


constructor(private router: Router, public apiConnect:ApiConnectionComponent) {

this.apiConnect.getAllTours().subscribe(
  response=>{
  // console.log(response);
 this.myTours = response.message
//  console.log(this.myTours);


 })

}

  toggleBooking(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    if (button) {
      button.style.backgroundColor = 'orange';
      button.innerText = 'Booked'

      //  localStorage.setItem(`tour_${tour_id}_booked`, tour.booked.toString());
    }
  }

}
