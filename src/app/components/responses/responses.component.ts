import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/interfaces/comment.interface';
import { User } from 'src/app/interfaces/user.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent {
  @Input()
  public iParentComment: number = 0;
  @Input()
  public commentsParentList:Comment[] = [
    {
      user: {
        name:'',
        profileImage: '',
      },
      message: '',
      response:[]

    }
  ];
  @Output()
  public onNewParentResponse:EventEmitter<Comment> = new EventEmitter<Comment>();
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
  public responseToChild:Comment = {
    user: this.userRegistered,
    message: 'To Child',
    response: []
  }

  constructor(
    private commentService:CommentService
  ) {}

  ngOnInit() {
    console.log(this.commentsParentList[this.iParentComment]);
  }

  saveResponseParent( response:Comment ) : void {
    console.log({response});
    let commentUpdated = this.commentService.insertResponseToComment(response,this.iParentComment);
    commentUpdated = {
      ...response,
      id: this.iParentComment
    }
    this.commentsParentList[this.iParentComment].response.unshift(commentUpdated);
  }

  saveResponseChild( response:Comment, childCommentId:number ) {
    let commentChild = this.commentService.insertResponseToComment( response , childCommentId );
    commentChild = {
      ...response,
      id: childCommentId
    }
    this.commentsParentList[this.iParentComment].response[childCommentId].response.unshift(commentChild);
  }
}
