import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegisterService } from '../register.service';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent implements OnInit {

  adminreg: FormGroup;
  submitted = false;
  resp;

  constructor(private formBuilder: FormBuilder, 
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {

    this.adminreg = this.formBuilder.group({
      adminname: ['', [Validators.required, Validators.minLength(4)]],
        emailId: ['', [Validators.required, Validators.email]],
        phoneno: ['', [Validators.required, Validators.minLength(10),Validators.pattern(/^[1-9]\d*$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.adminreg.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminreg.invalid) 
    {
        return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value));

    this.authService.registerAdmin(this.adminreg.value).subscribe(
      (response) =>{
        this.resp = response;
        // alert(this.resp.message);
        console.log(this.resp);

        // localStorage.setItem('token',this.resp.token);
        // this.router.navigate(['/login']);
        if(this.resp.status == true){
          this.router.navigate(['/adminlogin']);
        }
      },
      (error) => {
        console.log(error);
        
      }
    )
}
}
