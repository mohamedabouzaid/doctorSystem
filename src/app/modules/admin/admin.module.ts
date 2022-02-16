import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './adminComponents/dashbord/dashbord.component';
import { RouterModule, Routes  } from '@angular/router';

const routes: Routes = [

  {path:'bord',component:DashbordComponent},
  {path:'',redirectTo:'bord',pathMatch:'full'}


 ];

@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
