import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      specialty: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
      waiting: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
        this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
           ( data:any) => {
                this.router.navigate(['/register'], { queryParams: { registered: true }});
            },
            (error:any )=> {
                this.error = error;
                this.loading = false;
            });
            console.log("submit fun",this.registerForm.value);

}




}
