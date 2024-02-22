import { Component } from '@angular/core';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {



  allBooked:any;

constructor(public apiConnect:ApiConnectionComponent) {


  this.apiConnect.getAllBookedTours().subscribe(
    response=>{
    console.log(response);
   this.allBooked = response.message


  })
}


}
