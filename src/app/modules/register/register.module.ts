import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './registerComponents/login/login.component';
import { SignupComponent } from './registerComponents/signup/signup.component';
import { RouterModule, Routes  } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/gaurd/auth.guard';

const routes: Routes = [

  {path:'login',component:LoginComponent },
  {path:'signup',component:SignupComponent },
  {path:'',redirectTo:'login',pathMatch:'full'}


 ];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
