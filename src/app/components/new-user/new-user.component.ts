import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  public newUser:User = {
    name: 'Default',
    profileImage: 'https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg'
  }

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  saveNewUser(user: User): void {
    const userSaved = this.userService.addNewUser(user);
    this.router.navigate(['forum']);
    // if(userSaved){
    //   this.router.navigate(['forum']);
    // }
  }


}
