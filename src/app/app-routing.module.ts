import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path: "login", component:LoginComponent},
  {path:"update/:regno",component:UpdateComponent},
  {path:"studentlist",component:StudentListComponent},
  {path:"add",component:CreateStudentComponent},
  {path:"details/:regno",component:StudentDetailsComponent},
  {path:"logout", component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
