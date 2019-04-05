import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(register){
    return this.http.post("http://localhost:3209/api/register",register);
  }
}
