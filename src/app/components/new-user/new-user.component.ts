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
    name: ' ',
    profileImage: ''
  }

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  async saveNewUser(user: User) {
    this.userService.addNewUser(user).subscribe(
      {
        next: (response)=>{
          if(!response) return;
          this.router.navigate(['forum'],{queryParams:{...response}});
        }
      }
    );
  }


}
