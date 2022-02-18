import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private doctorService: UserService) {}
    doctors:any;
  ngOnInit(): void {
    this.doctorService.allDoctors().subscribe(
      (data) => {
        this.doctors=data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
