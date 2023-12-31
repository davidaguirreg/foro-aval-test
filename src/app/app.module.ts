import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponsesComponent } from './components/responses/responses.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { InsertCommentComponent } from './components/insert-comment/insert-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsesComponent,
    ListCommentsComponent,
    NewUserComponent,
    InsertCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
