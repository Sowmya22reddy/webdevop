import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URLHelper } from './URLHelper';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urls = URLHelper.urls;

  constructor(private http:HttpClient,
              private router:Router) { }

  registerUser(register)
  {
    return this.http.post("http://localhost:3209/api/register",register);
  }

  loginUser(login)
  {
    return this.http.post("http://localhost:3209/api/login",login);
  }

  addProduct(prod){
    return this.http.post("http://localhost:3209/api/addProduct",prod);
  }

  getProducts(){
    return this.http.get("http://localhost:3209/api/getProduct");
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.urls.userhome=false;
    this.urls.cart=false;
    this.urls.logout=false;
    this.urls.login=true;
    this.urls.register=true;
    this.urls.home=true;
    this.urls.adminhome=false;
    this.urls.adminpage=false;
    this.urls.products=false;
    this.router.navigate(['']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
