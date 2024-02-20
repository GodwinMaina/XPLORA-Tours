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
  {path:'**', component:ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
