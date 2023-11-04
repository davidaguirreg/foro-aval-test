import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class CommentService {
  constructor(
    private httpClient : HttpClient
  ) { }

  insertUserComment(newComment: Comment): Comment {
    if(!newComment) throw console.error('El comentario no ha sido especificado');
    // let observableCommentSaved = new Observable<Comment>()
    // observableCommentSaved = this.httpClient.post<Comment>(environment.backendUrl+'/comment',newComment);
    let commentSaved:Comment = {
      user: {
        name: 'default',
        profileImage:'default'
      },
      message: 'default',
      response: []
    }
    commentSaved = {...newComment};
    // observableCommentSaved.subscribe((response)=>{
    //   if(!response) return ;
    //   commentSaved = {...response};
    // })
    return commentSaved;
  }

  insertResponseToComment( newComment:Comment , parentId:number ) : Comment {
    let commentUpdated:Observable<Comment> = new Observable<Comment>();

    let commentReturned:Comment = {
      id:8,
      user: {
        name: 'default',
        profileImage:'default'
      },
      message: 'default',
      response: []
    }
    // commentUpdated = this.httpClient.put<Comment>(environment.backendUrl+'/'+parentId, newComment);
    // commentUpdated.subscribe((response)=>{
    //   if(!response) return ;
    //   commentReturned = response;
    // })
    commentReturned = {...newComment};
    return commentReturned;
  }
}
