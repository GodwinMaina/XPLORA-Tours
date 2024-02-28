import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { AuthService } from '../../services/auth-connection/auth-connection.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booked-tours',
  templateUrl: './booked-tours.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./booked-tours.component.css']

})export class BookedToursComponent implements OnInit {
  allBooked: any[];
  user_id: string | null;

  constructor(
    private route: ActivatedRoute,
    private apiConnect: ApiConnectionComponent  ) {
    this.allBooked = [];
    this.user_id = null;
  }

  ngOnInit(): void {
    // Retrieve user_id from query parameters
    this.route.queryParams.subscribe((params: any) => {
      this.user_id = params['user_id'];
      console.log('User ID on booked  page:', this.user_id);

      // Fetch booked tours for the user
      if (this.user_id) {
        this.apiConnect.userBookedTours(this.user_id).subscribe(
          (response: any) => {
            // console.log(response);
            this.allBooked = response.bookedTour;
          },
          // (error: any) => {
          //   console.error('Error fetching user booked tours:', error);
          // }
        );
      } else {
        console.warn('User ID is null.');
      }
    });
  }
}
