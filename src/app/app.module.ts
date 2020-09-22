import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { APP_BASE_HREF } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app.routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';
import { QuizesComponent } from './quizes/quizes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    QuestionsComponent,
    UsersComponent,
    QuizesComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
