
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUserInterface } from '../../interfaces/signUser';
import { createTourInterface } from '../../interfaces/createTour';
import { Observable } from 'rxjs';
import { loginDetails } from '../../interfaces/loginUser'
import { map } from 'rxjs/operators';
import { AuthService } from '../auth-connection/auth-connection.component';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionComponent {



  constructor(private http: HttpClient,private authService:AuthService) { }

  signUpUser(UserName: string, email: string, password: string): Observable<any> {
    const userData: signUserInterface = { userName: UserName, email: email, password: password };
    return this.http.post<{ message: string, error: string }>('http://localhost:5500/signup', userData)
  }


  //create Tour to endpoint
  // createTour(tourName:createTourInterface) .................same as below
  createTour( tourName: string, tour_img: string, tourInfo: string, location: string, date: string, price: string, tourType: string): Observable<any> {
    const tourData: createTourInterface = { tourName: tourName, tour_img: tour_img, tourInfo: tourInfo, location: location, date: date, price: price, tourType: tourType};
    return this.http.post<{ message: string, error: string }>('http://localhost:5500/createTours', tourData)
  }

  //login user http and auth connection
  // userLogins:loginDetails
  loginUser(email: string, password: string) {
    const userLogins = { email: email, password: password };
    return this.http.post<{ isAdmin: any; message: string, token: string, error: string, user_id: string }>('http://localhost:5500/auth/login', userLogins)
      .pipe(
        map(response => {
          if (response.user_id) {
            // If user_id is available in the response, save it to AuthService
            this.authService.setUserId(response.user_id);
          }
          return response; // Pass through the response
        })
      );
  }



  getAllTours() {
    interface tourResponse {
      message: [ { tour_id:string,tour_img: string ,tourName: string, tourInfo: string, location: string, date: string,price: string,tourType: string,}],

      token: [

        {}
      ],

      error: []
    }
    return this.http.get<tourResponse>('http://localhost:5500/Tours')
  }


  getAllUsers() {
    interface userResponse {
    message: [ { userName:string, email:string, password:string}]
    }
    return this.http.get<userResponse>('http://localhost:5500/allUsers')
  }

  bookedTours(tour_id:string, user_id:string){
    interface bookedInt{
      tour_id:string,
      user_id:string
    }
      const booked:bookedInt={tour_id:tour_id, user_id:user_id}
      return  this.http.post<{ message: string, error: string }>('http://localhost:5500/bookings', booked)

  }


  getAllBookedTours(){
    interface allBooked {
      message: [ { tour_id:string, user_id:string, booking_id:string}]
      }
      return this.http.get<allBooked>('http://localhost:5500/bookedTours')
  }


userBookedTours(tour_id:string){
  interface allBooked {
    message: string,
    error: string
  }
    return this.http.get<allBooked>(`http://localhost:5500/booked/${tour_id}`)
}


deleteTour(tour_id: string) {
  interface deleteResponse {
    message: string,
    error: string
  }
  return this.http.delete<deleteResponse>(`http://localhost:5500/delete/${tour_id}`)
}


}



