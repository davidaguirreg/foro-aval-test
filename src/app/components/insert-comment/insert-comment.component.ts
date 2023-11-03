import { Component } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
@Component({
  selector: 'app-insert-comment',
  templateUrl: './insert-comment.component.html',
  styleUrls: ['./insert-comment.component.scss']
})
export class InsertCommentComponent {

  public comment: Comment = {
    user: {
      name: 'Default',
      profileImage: 'https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg'
    },
    message: 'I love Aval Buro',
    response: []
  }

  saveUserComment(newComment: Comment): void {

  }

}
