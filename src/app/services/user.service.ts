import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UserService {

  public user:User = {
    name: 'New User Name',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&usqp=CAU'
  };

  constructor() { }

  addNewUser(user:User){

  }

}
