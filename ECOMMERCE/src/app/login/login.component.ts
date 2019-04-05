import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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
          this.router.navigateByUrl('/user-home');
          
        }
      )
  }
}
