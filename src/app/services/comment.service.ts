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

  insertUserComment(newComments: Comment[]): Observable<Comment[]> {
    if(!newComments) throw console.error('Comentarios no han sido especificados');
    return this.httpClient.post<Comment[]>(environment.backendUrl+'/comments',newComments);

  }

  insertResponseToComment( newComment:Comment[]) : Observable<Comment[]> {

    return this.httpClient.post<Comment[]>(environment.backendUrl+'/comments',newComment);
  }

  getComments() : Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(environment.backendUrl+'/comments');
  }
}
