import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    registerForm!: FormGroup;
    loading = false;
    submitted = false;
    error: string | undefined;

  constructor(  )
     {

    }

    ngOnInit(): void  {

    }






}
