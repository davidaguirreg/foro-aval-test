import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
import { User } from 'src/app/interfaces/user.interface';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {
  @Input()
  public commentsList : Comment[] = []
  //   {
  //     user: {
  //       name: 'David Aguirre',
  //       profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  //     },
  //     message: 'Hey What is up folk',
  //     response: [
  //       {
  //         user: {
  //           name: 'Hector Lavoe',
  //           profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-PPHbiN5UY9oUF6zVFqu3L0QfSB7x3S_g7OuEJgZZ34JyZg1FHH1B6pk-GQntoH80v4&usqp=CAU'
  //         },
  //         message: 'Hey what u mean ?',
  //         response:[
  //           {
  //             user: {
  //               name: 'Pedro Juan',
  //               profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81P6my9nAe_7zKcpys_FvpjWc6WBtGBB2SBWIWA7gfHFxXR4NSlKIsKpbLfi0MKlUSw0&usqp=CAU'
  //             },
  //             message: 'Libre como el viento my friend.',
  //             response: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     user: {
  //       name: 'Carmine 6899',
  //       profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
  //     },
  //     message: 'Hey Why did u come to this place?',
  //     response: []
  //   }
  // ]

  @Input()
  public userRegistered:User = {
    name: 'Default',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEWOkvSGPFJ2dbsdAosboiMPjnyFSf82SUfjwsOZ3v7ljoa6s5ONaT0KiZdtonYY_cP8&usqp=CAU'
  }

  public responseToParent:Comment = {
    user: this.userRegistered,
    message: 'Default',
    response: []
  }

  constructor(
    private commentService:CommentService,
    private route:ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      if(params){
        console.log(params);
        this.userRegistered.name = params['name'];
        this.userRegistered.profileImage = params['profileImage'];
      }else{
        this.router.navigate(['new-user']);
      }
    })
    this.commentService.getComments().subscribe((response)=>{
      if(!response) return;
      this.commentsList = [...response];
    })
  }

  onSavedNewComment(comment:Comment) {
    this.commentsList.unshift(comment);
    this.commentService.insertUserComment(this.commentsList).subscribe(
      (response)=>{
        if(!response) return;
        console.log("List comments guardados");

      }
    );
  }

  onNewResponseSaved( commentUpdated:Comment[] ):void {
    //this.commentsList[commentUpdated.id!].response.unshift({...commentUpdated});
    this.commentsList = [...commentUpdated];
    this.commentService.insertUserComment(this.commentsList).subscribe(
      (response)=>{
        if(!response) return ;
        console.log("Responses were saved");
      }
    )

  }


  updateSavedResponses(childResponses:Comment[]) {
    console.log(this.commentsList);
    this.commentsList = [...childResponses];
    this.commentService.insertUserComment(this.commentsList).subscribe(
      (response)=>{
        if(!response) return;
        console.log("Responses Saved Child");

      }
    )
  }

}
