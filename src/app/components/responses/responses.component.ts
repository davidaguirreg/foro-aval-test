import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/interfaces/comment.interface';
import { User } from 'src/app/interfaces/user.interface';
import { CommentService } from 'src/app/services/comment.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent {
  @Input()
  public nivel!:number;
  @Input()
  public iParentComment: number = 1;
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
  public onNewParentResponse:EventEmitter<Comment[]> = new EventEmitter<Comment[]>();
  @Output()
  public onNewChildResponse:EventEmitter<Comment[]> = new EventEmitter<Comment[]>();
  @Output()
  public onBaseLevel:EventEmitter<Comment[]> = new EventEmitter<Comment[]>();
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

  public idAccordion:string = uuid();

  constructor(
    private commentService:CommentService
  ) {}

  ngOnInit() {
  }

  saveResponseParent( response:Comment ) : void {
    console.log({response});
    response = {
      ...response,
      user:this.userRegistered,
      message:this.formParentResponse.value.parentResponse,
      id:this.iParentComment
    }
    this.commentsParentList[this.iParentComment].response.unshift(response);
    if(this.nivel>=0){
      this.onNewParentResponse.emit(this.commentsParentList);
    }
  }

  onSaveParentResponse(response:Comment[]){
    if(this.nivel==0){

      this.commentService.insertUserComment(this.commentsParentList).subscribe(
        (response)=>{
          if(!response) return ;
          console.log("Response Parent Saved");
        }
      )
    }else{
      this.onNewParentResponse.emit(response);
    }
  }

  onSaveChildResponse(commentsUpdated:Comment[]){
    this.commentsParentList=[...commentsUpdated];
    if(this.nivel==0){
      this.onBaseLevel.emit(this.commentsParentList);
    }else{
      this.onNewChildResponse.emit(this.commentsParentList);
    }
  }

  saveResponseChild( response:Comment, childCommentId:number ) {
    console.log("nivel="+this.nivel);
    response.user=this.userRegistered;
    response.message=this.formChildResponse.value.responseChild;
    response = {
      ...response,
      user: this.userRegistered,
      message: this.formChildResponse.value.responseChild
    }
    console.log("Arreglo en hijo"+this.commentsParentList[this.iParentComment].response[childCommentId].response);

    this.commentsParentList[this.iParentComment].response[childCommentId].response.unshift({...response});
    if(this.nivel===0){
      this.onBaseLevel.emit(this.commentsParentList);
    }else{
      this.onNewChildResponse.emit(this.commentsParentList);
    }
  }
}
