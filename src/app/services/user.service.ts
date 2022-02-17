import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(user: any) {
     return this.http.post('http://localhost:3000/doctors/', user);
}
}
