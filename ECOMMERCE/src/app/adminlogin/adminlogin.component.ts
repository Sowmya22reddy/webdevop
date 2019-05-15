import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { URLHelper } from '../URLHelper';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin: FormGroup;
  submitted = false;
  resp;
  urls = URLHelper.urls;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {

    this.adminlogin = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }

  get f() { return this.adminlogin.controls; }

  onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.adminlogin.invalid) {
      return;
  }

 // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value))

  this.authService.loginAdmin(this.adminlogin.value).subscribe(
    (response) =>{
      this.resp = response;
      //alert(this.resp.message);
      console.log(this.resp);

      localStorage.setItem('token',this.resp.token);
      
      if(this.resp.status == true){
        
      this.router.navigate(['/admin-home']);
        this.urls.login=false;
        this.urls.register=false;
        this.urls.home=false;
        this.urls.userhome=false;
        this.urls.admin=false;
        this.urls.aboutus=false;
        this.urls.cart=false;
        this.urls.logout=true;
        this.urls.adminhome=true;
        this.urls.adminpage=false;
        this.urls.products=false;
      }
      else
      {
        this.adminlogin.reset();
        
      }
               
    },
    (error) => {
      console.log(error);
      
    }
  )
}
}
