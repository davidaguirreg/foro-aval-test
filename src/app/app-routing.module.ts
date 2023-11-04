import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: NewUserComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'forum',
    component: ListCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
