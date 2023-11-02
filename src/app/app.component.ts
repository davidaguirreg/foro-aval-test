import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { Comment } from './interfaces/comment.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public newUser:User = {
    name: 'Default',
    profileImage: 'User'
  }

  public comment : Comment = {
    user: {...this.newUser},
    message: 'I love Aval Buro'
  }

  public commentsList : Comment[] = [
    {
      user: {
        name: 'David Aguirre',
        profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      message: 'Hey What is up folk'
    },
    {
      user: {
        name: 'Carmine 6899',
        profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
      },
      message: 'Hey Why did u come to this place?'
    }
  ]
  constructor(
    private userService: UserService
  ){}

  saveNewUser( user : User ) : void {
    this.userService.addNewUser(user);
  }

  saveUserComment( newComment : Comment ) : void {

  }

}
