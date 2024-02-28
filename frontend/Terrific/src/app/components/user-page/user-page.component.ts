import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-connection/auth-connection.component';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { CommonModule } from '@angular/common';
import { signUserInterface } from '../../interfaces/signUser';

@Component({
  selector: 'app-user-page',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})export class UserPageComponent implements OnInit {

  myTours: any[];

  loggedInUserId: string | null = null;

  user:signUserInterface[]=[]

  user_id: string | null = null;


  // const email = this.authService.getEMail();
  constructor(private router: Router, private apiConnect: ApiConnectionComponent, private authService: AuthService) {
    this.myTours = [];

    this.user_id = this.authService.getUserId();
    // this.emailed=''

  }

  ngOnInit(): void {

    this.loggedInUserId = this.authService.getUserId();

    this.apiConnect.getAllTours().subscribe(
      response => {
        this.myTours = response.message;
      },
      // error => {
      //   console.error('Error fetching tours:', error);
      // }

    );

    this.apiConnect.getAllUsers().subscribe(
      response=>{
        console.log(response);
        // const username = response.message;
        // console.log(username)

        this.user=response.message
        // console.log(email);


      })

  }


  navigateToBookedPage(): void {
    this.router.navigate(['/booked'], { queryParams: { user_id: this.user_id } });
  }


  toggleBooking(event: MouseEvent, tour_id: string): void {
    const user_id = this.authService.getUserId();
    if (user_id) {
      // User is logged in, you can proceed with booking
      console.log('Booking tour with ID:', tour_id, 'for user with ID:', user_id);

      //this.router.navigate(['/booked'], { queryParams: { user_id: user_id } });

      // this.router.navigate(['/booked']);

      // Change button style
      const button = event.target as HTMLButtonElement;
      button.style.backgroundColor = 'yellow';
      button.style.color = 'black';
      button.innerText = 'Booked';

      // Make HTTP request to save booking
      this.apiConnect.bookedTours(tour_id,user_id).subscribe({
        next: response => {
          // Handle successful booking
          console.log('Booking successful:', response);
          // Optionally, you can perform additional actions like updating UI
        },
        error: error => {
          // Handle booking error
          console.error('Error booking tour:', error);
          // Optionally, you can revert button appearance
          button.style.backgroundColor = '';
          button.innerText = 'Book';
        }
      });

    } else {
      // User is not logged in, you may want to redirect to the login page
      this.router.navigate(['/auth/login']);
    }
  }

  handleTourClick(tour_id: string): void {
    // You can handle clicking on a tour to view more details or take any other action
    console.log('Tour clicked with ID:', tour_id);
    // For example, you could navigate to a tour details page
    // this.router.navigate(['/tour-details', tourId]);
  }
}
