import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
import { CommentService } from 'src/app/services/comment.service';
import { User } from 'src/app/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-comment',
  templateUrl: './insert-comment.component.html',
  styleUrls: ['./insert-comment.component.scss']
})
export class InsertCommentComponent {
  @Input()
  public userSaved:User = {
    name: 'Default',
    profileImage: 'https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg'
  }

  public comment: Comment = {
    user: this.userSaved,
    message: 'I love Aval Buro',
    response: []
  }
  @Output()
  public onSaveComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  formComment:FormGroup = new FormGroup({
    userComment: new FormControl('I love Aval Buro')
  });

  constructor(
    private router:Router
  ) {}


  saveComment(newComment: Comment): void {
    newComment = {
      user: {...this.userSaved},
      message: this.formComment.value.userComment,
      response:[]
    }
    this.onSaveComment.emit(newComment);
  }

  changeUser():void {
    this.router.navigate(['new-user']);
  }
}
