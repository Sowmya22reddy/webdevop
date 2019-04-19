import { Component, OnInit } from '@angular/core';
import { URLHelper } from '../URLHelper';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentURLs = URLHelper.urls;
  constructor(private authService:AuthService) { }

  ngOnInit() {

    

  }

}

