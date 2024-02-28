import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TourpageComponent } from './components/tourpage/tourpage.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ToursComponent } from './components/tours/tours.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BookedToursComponent } from './components/booked-tours/booked-tours.component';

export const routes: Routes = [


  {path:'', component: HomepageComponent},
  {path:'signup', component: SignupComponent},
  {path:'auth/login', component: LoginComponent},
  {path:'destinations', component: UserPageComponent},
  {path:'addTours', component:TourpageComponent },
  {path:'admin', component:AdminPageComponent },
  {path:'users', component:UserPageComponent },
  {path:'tours', component:ToursComponent },
  {path:'about', component:UserPageComponent },
  {path:'contacts', component:UserPageComponent },
  {path:'allUsers', component:GetUsersComponent },
  {path:'bookings', component:BookingsComponent },
  {path:'reviews', component:ReviewsComponent },
  {path:'booked', component:BookedToursComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'**', component:ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
