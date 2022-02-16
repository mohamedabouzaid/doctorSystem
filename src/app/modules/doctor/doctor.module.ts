import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './doctorComponents/profile/profile.component';
import { RouterModule, Routes  } from '@angular/router';

const routes: Routes = [

  {path:'profile',component:ProfileComponent},

  {path:'',redirectTo:'profile',pathMatch:'full'}


 ];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
