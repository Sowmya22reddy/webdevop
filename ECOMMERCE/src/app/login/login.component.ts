import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { URLHelper } from '../URLHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  resp;
  urls = URLHelper.urls;
  

  constructor(private formBuilder: FormBuilder,
              private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
      this.login = this.formBuilder.group({
          emailId: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.login.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.login.invalid) {
          return;
      }

     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value))

      this.loginService.loginUser(this.login.value).subscribe(
        (response) =>{
          this.resp = response;
          alert(this.resp.message);

          if(this.resp.status == true){

            this.urls.login=false;
            this.urls.register=false;
            this.urls.aboutus=false;
            this.urls.cart=true;
            this.urls.logout=true;
            this.router.navigateByUrl('/user-home');
          }
          else
          {
            this.login.reset();
            
          }
          
        }
      )
  }
}
