import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInUserSubject: BehaviorSubject<User>;
  private loggedInUser: User = {
    username: ''
  };
  constructor() {
    this.loggedInUserSubject = new BehaviorSubject<User>(this.loggedInUser);
   }
}
