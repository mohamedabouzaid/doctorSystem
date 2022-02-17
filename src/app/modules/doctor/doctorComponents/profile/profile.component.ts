import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
     currentUser: any;
     doctorProfile:any;
  constructor(private router: Router,
    private authenticationService: AuthService,
    private DoctorServive:UserService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }


  ngOnInit(): void {


    this.DoctorServive.profile(JSON.parse(this.currentUser).token).subscribe(
      (data)=>{
        this.doctorProfile=data;
      },
      (error)=>{
        console.log(error);

      }
    )

  }



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
}
}
