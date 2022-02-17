import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  loading = false;
  submitted = false;
  registered !: boolean;
  error !: string;;

  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService)
     {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/doctors']);


    }
    }

    ngOnInit(): void  {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]


    });
    this.registered = this.route.snapshot.queryParams['registered'] || false ;
    if( this.registered){
      console.log("registered true");

    }


    }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;
      this.registered=false
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                if(data=="invalid"){

                  this.error = "invalid User name or Password";
                  this.loading = false;
                }
                console.log(data);

                 this.router.navigate(['/doctors']);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }



}
