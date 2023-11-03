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

  public commentsList : Comment[] = [
    {
      user: {
        name: 'David Aguirre',
        profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      message: 'Hey What is up folk',
      response: [
        {
          user: {
            name: 'Hector Lavoe',
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-PPHbiN5UY9oUF6zVFqu3L0QfSB7x3S_g7OuEJgZZ34JyZg1FHH1B6pk-GQntoH80v4&usqp=CAU'
          },
          message: 'Hey what u mean ?',
          response:[]
        }
      ]
    },
    {
      user: {
        name: 'Carmine 6899',
        profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
      },
      message: 'Hey Why did u come to this place?',
      response: []
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
