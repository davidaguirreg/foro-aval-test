import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment.interface';

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

  constructor() {

  }

  ngOnInit() {
    console.log(this.commentsParentList[this.iParentComment]);
  }
}
