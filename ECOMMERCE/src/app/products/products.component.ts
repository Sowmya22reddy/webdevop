import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(private authService:AuthService) { }

    // getProd()
    ngOnInit()
    {

      this.authService.getProducts().subscribe(
        (response) =>{
          this.products = response;
        }
      )

    

  }

  deleteProduct(id){
    this.authService.deleteProduct(id).subscribe(
      (res) =>{
        console.log('Deleted');
      }
      
    )
  }

}