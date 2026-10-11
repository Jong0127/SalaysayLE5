import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
