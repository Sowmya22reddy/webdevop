import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegisterService } from '../register.service';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  register: FormGroup;
  submitted = false;

  resp;


  constructor(private formBuilder: FormBuilder, 
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
      this.register = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
          emailId: ['', [Validators.required, Validators.email]],
          phoneno: ['', [Validators.required, Validators.minLength(10),Validators.pattern(/^[1-9]\d*$/)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.register.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.register.invalid) 
      {
          return;
      }

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value));

      this.authService.registerUser(this.register.value).subscribe(
        (response) =>{
          this.resp = response;
          // alert(this.resp.message);
          console.log(this.resp);

          // localStorage.setItem('token',this.resp.token);
          // this.router.navigate(['/login']);
          if(this.resp.status == true){
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          console.log(error);
          
        }
      )
  }
}