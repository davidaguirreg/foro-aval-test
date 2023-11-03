import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {
  @Input()
  public commentsList : Comment[] = [
    {
      user: {
        name: 'David Aguirre',
        profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      message: 'Hey What is up folk',
      response: [
        {
          user: {
            name: 'Hector Lavoe',
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-PPHbiN5UY9oUF6zVFqu3L0QfSB7x3S_g7OuEJgZZ34JyZg1FHH1B6pk-GQntoH80v4&usqp=CAU'
          },
          message: 'Hey what u mean ?',
          response:[
            {
              user: {
                name: 'Pedro Juan',
                profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81P6my9nAe_7zKcpys_FvpjWc6WBtGBB2SBWIWA7gfHFxXR4NSlKIsKpbLfi0MKlUSw0&usqp=CAU'
              },
              message: 'Libre como el viento my friend.',
              response: []
            }
          ]
        }
      ]
    },
    {
      user: {
        name: 'Carmine 6899',
        profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
      },
      message: 'Hey Why did u come to this place?',
      response: []
    }
  ]

  onSavedNewComment(comment:Comment) {
    this.commentsList.unshift(comment);
  }

  onNewResponseSaved( commentUpdated:Comment ):void {
    this.commentsList[commentUpdated.id!].response.unshift(commentUpdated);
  }
}
