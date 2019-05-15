import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  products;
  
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {

    this.authService.getProducts().subscribe(
      (response) =>{
        this.products = response;
      }
    )

  }

}
