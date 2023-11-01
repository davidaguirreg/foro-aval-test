import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private userService: UserService
  ){}

  saveNewUser(user:User): void {

  }

}
