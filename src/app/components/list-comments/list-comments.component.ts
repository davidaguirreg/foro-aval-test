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
  public commentsList : Comment[] = [];
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
    this.commentsList = [...commentUpdated];
    this.commentService.insertUserComment(this.commentsList).subscribe(
      (response)=>{
        if(!response) return ;
        console.log("Responses were saved");
      }
    )

  }


  updateSavedResponses(childResponses:Comment[]) {
    this.commentsList = [...childResponses];
    this.commentService.insertUserComment(this.commentsList).subscribe(
      (response)=>{
        if(!response) return;
        console.log("Responses Saved Child");

      }
    )
  }

}
