import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ForgotpasswordComponent,
    UserHomeComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    /*Creates a module with all the router providers and directives. 
    It also optionally sets up an application listener to perform an initial navigation.*/
    RouterModule.forRoot([
      {
        path:'',component: HomeComponent
      },
      {
        path:'about-us',component: AboutUsComponent
      },
      {
        path:'login',component: LoginComponent
      },
      {
        path:'register',component: RegisterComponent
      },
      {
        path:'forgotpassword',component: ForgotpasswordComponent
      },
      {
        path:'user-home',component: UserHomeComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }