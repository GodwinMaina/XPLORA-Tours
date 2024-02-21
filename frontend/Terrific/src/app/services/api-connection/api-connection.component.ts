
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUserInterface } from '../../interfaces/signUser';
import { createTourInterface } from '../../interfaces/createTour';
import { Observable } from 'rxjs';
import { loginDetails } from '../../interfaces/loginUser'

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionComponent {

  constructor(private http: HttpClient) { }


  //FUNCTION signupUser to the endpoint
  //REMEMBER TO IMPORT THIS IN THE .TS FILE OF SIGNUP
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
    const userLogins: loginDetails = { email: email, password: password }
    return this.http.post<{ isAdmin: any; message: string, token: string, error: string }>('http://localhost:5500/auth/login', userLogins)
  }


  getAllTours() {

    interface tourResponse {

      message: [ { tour_img: string ,tourName: string, tourInfo: string, location: string, date: string,price: string,tourType: string,}],

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




}





