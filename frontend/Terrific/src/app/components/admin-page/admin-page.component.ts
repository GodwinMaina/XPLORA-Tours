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

  myTours:any[]=[];

constructor(private router: Router, public apiConnect:ApiConnectionComponent) {

this.apiConnect.getAllTours().subscribe(
  response=>{
  console.log(response);

 this.myTours = response.message

//  console.log(this.myTours);

})

}

deleteTours(tour_id: string): void {
  this.apiConnect.deleteTour(tour_id).subscribe(
    response => {
      console.log(response);
      // Handle response as needed
    },
    error => {
      console.error('Error deleting tour:', error);
      // Handle error gracefully
    }
  );
}


    navigateToAddTours() {
    this.router.navigate(['/addTours']);
}

}
