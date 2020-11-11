import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateComponent } from './update/update.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthService } from './login/auth.service';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    UpdateComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    MenuComponent,
    LogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
      AuthService,
    RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
