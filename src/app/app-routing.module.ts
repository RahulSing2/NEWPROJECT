import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [
  {path:'e1',component:EmpComponent},
  {path:'d1',component:DeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
