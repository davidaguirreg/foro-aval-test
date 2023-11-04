import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
import { CommentService } from 'src/app/services/comment.service';
import { User } from 'src/app/interfaces/user.interface';
import { FormGroup } from '@angular/forms';
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
    user: {...this.userSaved},
    message: 'I love Aval Buro',
    response: []
  }
  @Output()
  public onSaveComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  form:FormGroup = new FormGroup({

  });

  constructor(
    private commentService: CommentService
  ) {}

  saveComment(newComment: Comment): void {
    const savedComment:Comment = this.commentService.insertUserComment(newComment);
    if(!savedComment) return ;
    this.onSaveComment.emit(savedComment);
  }

}
