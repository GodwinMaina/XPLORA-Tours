// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user_id: string | null = null;

  public email:string | null = null;

  constructor() {}

  setUserId(user_id: string): void {
    this.user_id = user_id;
  }

  getUserId(): string | null {
    return this.user_id;
  }

  // setEMail(email: string): void {
  //   this.email = email;
  // }

  // getEMail(): string | null {
  //   return this.email;
  // }

}
