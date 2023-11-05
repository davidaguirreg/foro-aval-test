import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  public nivel=0;
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
  @Output()
  public onNewChildResponse:EventEmitter<Comment> = new EventEmitter<Comment>();
  @Output()
  public onBaseLevel:EventEmitter<Comment> = new EventEmitter<Comment>();
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

  public formChildResponse:FormGroup = new FormGroup(
    {
      responseChild: new FormControl('')
    }
  )

  public formParentResponse:FormGroup = new FormGroup(
    {
      parentResponse: new FormControl('')
    }
  )

  constructor(
    private commentService:CommentService
  ) {}

  ngOnInit() {
    console.log(this.commentsParentList[this.iParentComment]);
  }

  saveResponseParent( response:Comment ) : void {

    console.log({response});
    response.user = this.userRegistered;
    response.message = this.formParentResponse.value.parentResponse;
    response.id=this.iParentComment;
    //this.commentsParentList[this.iParentComment].response.unshift(commentUpdated);
    if(this.nivel>=0){
      this.onNewParentResponse.emit(response);
    }
    //TO-DO

  }

  onSaveParentResponse(){
    if(this.nivel==0){
      this.commentService.insertUserComment(this.commentsParentList).subscribe(
        (response)=>{
          if(!response) return ;
          console.log("Response Parent Saved");
        }
      )
    }else{
      this.onNewParentResponse.emit();
    }
  }

  onSaveChildResponse(){
    if(this.nivel==1){
      this.onBaseLevel.emit();
    }else{
      this.onNewChildResponse.emit();
    }
  }

  saveResponseChild( response:Comment, childCommentId:number ) {
    console.log(this.formChildResponse.value.responseChild);
    response.user=this.userRegistered;
    response.message=this.formChildResponse.value.responseChild;
    this.commentsParentList[this.iParentComment].response[childCommentId].response.unshift({...response});

    if(this.nivel>0){
      this.onNewChildResponse.emit();
    }
  }
}
