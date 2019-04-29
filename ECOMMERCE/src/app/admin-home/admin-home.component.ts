import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  products;
  // urls = URLHelper.urls;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private authService:AuthService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.addProd = this.formBuilder.group({
      prodId:['',[Validators.required,Validators.minLength(3)]],
      prodName: ['', [Validators.required, Validators.minLength(6)]],
      prodPrice: ['', [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
      prodDesc:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      prodImage:['',Validators.required]
  });

  // this.authService.getProducts().subscribe(
  //   (response) =>{
  //     this.products = response;
  //   }
  // )

//   this.route.params.subscribe(params => {
//     this.authService.getProductsByID(params['id']).subscribe(res => {
//       this.products = res;
//   });
// });
  
  

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
        alert(this.resp.message);
                         
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
