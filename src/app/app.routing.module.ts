import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {QuestionsComponent} from './questions/questions.component';
import {UsersComponent} from './users/users.component';
import {QuizesComponent} from './quizes/quizes.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'quizzes',
    component: QuizesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{
}
