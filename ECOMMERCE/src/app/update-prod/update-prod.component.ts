import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductModel } from '../productModel';

@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})
export class UpdateProdComponent implements OnInit {

  update: FormGroup;
  submitted = false;
  data;

  // id = this.route.snapshot.params['id'];
  product: any = {};

  constructor(private formBuilder: FormBuilder,
              private authService:AuthService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.update = this.formBuilder.group({
      prodId:['',[Validators.required,Validators.minLength(3)]],
      prodName: ['', [Validators.required, Validators.minLength(6)]],
      prodPrice: ['', [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
      prodDesc:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      prodImage:['',Validators.required]
  });

  this.route.params.subscribe(params => {
    this.authService.getProductsByID(params['id']).subscribe(res => {
      console.log(res);
      // this.product = res;
      this.update.patchValue(res);
      
    });
  });

  }

  get f() { return this.update.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid

    if (this.update.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n');

    this.authService.updateProduct(this.update.value)
      .subscribe( data => {
        console.log(data);
        //this.router.navigate(['']);
      });

      // this.route.params.subscribe(params => {
      // this.authService.updateProduct(params['id']);
      // // let id = params['_id'];
      // this.router.navigate(['/products']);
      // });

      
    }
    
  
  

}
