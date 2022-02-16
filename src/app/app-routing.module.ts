import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'register',loadChildren:()=>import('./modules/register/register.module').then(m=>m.RegisterModule)},
  {path:'doctors',loadChildren:()=>import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'users',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  //{path:"**",component:NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
