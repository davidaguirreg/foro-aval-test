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
    profileImage: 'https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg'
  }

  public comment : Comment = {
    user: {...this.newUser},
    message: 'I love Aval Buro',
    response: []
  }


  constructor(
    private userService: UserService
  ){}

  saveNewUser( user : User ) : void {
    this.userService.addNewUser(user);
  }

  saveUserComment( newComment : Comment ) : void {

  }

}
