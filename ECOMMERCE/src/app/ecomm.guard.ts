import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';
import { URLHelper } from './URLHelper';

@Injectable({
  providedIn: 'root'
})
export class EcommGuard implements CanActivate {

  urls = URLHelper.urls;
  constructor(private router:Router,
              private authService:AuthService){ }

  canActivate():boolean{
    
    if(this.authService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      this.urls.userhome=false;
    this.urls.cart=false;
    this.urls.logout=false;
    this.urls.login=true;
    this.urls.register=true;
    this.urls.home=true;
      return false;
    }
  }
  
}
