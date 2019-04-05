import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

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
              private registerService:RegisterService) { }

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

      this.registerService.registerUser(this.register.value).subscribe(
        (response) =>{
          this.resp = response;
          alert(this.resp.message);
        }
      )
  }
}