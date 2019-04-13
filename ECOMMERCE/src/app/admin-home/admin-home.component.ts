import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { URLHelper } from '../URLHelper';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  addProd: FormGroup;
  submitted = false;
  resp;
  // urls = URLHelper.urls;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit() {

    this.addProd = this.formBuilder.group({
      prodName: ['', [Validators.required, Validators.minLength(6)]],
      prodPrice: ['', [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
      prodDesc:['',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
      prodImage:['',Validators.required]
  });

  }

  get f() { return this.addProd.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addProd.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProd.value));

    this.authService.addProduct(this.addProd.value).subscribe(
      (response) =>{
        this.resp = response;
        //alert(this.resp.message);
        
        console.log(this.resp);
                         
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
