import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConnectionComponent } from '../../services/api-connection/api-connection.component';


@Component({
  selector: 'app-tourpage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './tourpage.component.html',
  styleUrl: './tourpage.component.css'
})
export class TourpageComponent {

  tourForm!:FormGroup;
  today: string | undefined;


  constructor(private fb:FormBuilder, public apiConnect:ApiConnectionComponent, private router: Router){
    //make form have date to be choosen from current day only
    this.today = new Date().toISOString().split('T')[0];
    this.tourForm=this.fb.group({

 tour_img: ['', [Validators.required]],
 tourName: ['', [Validators.required]],
 tourInfo: ['', [Validators.required]],
  location: ['', [Validators.required]],
  date: ['', [Validators.required]],
  price: ['', [Validators.required]],
  tourType: ['', [Validators.required]]

  });
}

getButtonColor() {
  return this.tourForm.invalid ? 'navy' : 'blue';
}

  onSubmitTour(){

  if (this.tourForm.valid) {
    this.apiConnect.createTour(
      this.tourForm.value.tour_img,
      this.tourForm.value.tourName,
      this.tourForm.value.tourInfo,
      this.tourForm.value.location,
      this.tourForm.value.date,
      this.tourForm.value.price,
      this.tourForm.value.tourType

    ).subscribe(response => {
      console.log(response);
    });

    this.tourForm.reset();

  }
    else {
      this.tourForm.markAllAsTouched();
    }

  }
}
