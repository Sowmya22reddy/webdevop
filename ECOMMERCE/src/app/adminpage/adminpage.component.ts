import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit{

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

}
