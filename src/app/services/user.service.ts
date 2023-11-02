import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  public user:User = {
    name: 'New User Name',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&usqp=CAU'
  };

  constructor(
    private httpClient:HttpClient
  ) { }

  addNewUser(user:User): User {
    if(!user) throw console.error('User undefined');
    this.user = {...user};
    // const saveUserUrl = environment.backendUrl + '/save'
    // const saveUserUrl = 'environment.backendUrl'
    let observableRegistered = new Observable<User>();
    // observableRegistered = this.httpClient.post<User>(saveUserUrl,user);
    let userRegistered:User = {
      name: 'New User',
      profileImage: 'New Image'
    }
    observableRegistered.subscribe(
      (response) => {
        if(!response) return;
        userRegistered=response;

      }
    );
    return userRegistered;
  }

}
