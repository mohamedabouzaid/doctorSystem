import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';
import { ErrorpageComponent } from './layout/errorpage/errorpage.component';


const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',loadChildren:()=>import('./modules/register/register.module').then(m=>m.RegisterModule) },
  {path:'doctors',loadChildren:()=>import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'users',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:"*",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
