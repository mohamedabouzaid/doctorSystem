import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './userComponent/home/home.component';
import { ProfileUserComponent } from './userComponent/profile-user/profile-user.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileUserComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
 ];


@NgModule({
  declarations: [
    HomeComponent,
    ProfileUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
