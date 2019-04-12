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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ForgotpasswordComponent,
    UserHomeComponent,
    NavbarComponent,
    AdminHomeComponent
    
    
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
        path:'',
        component: HomeComponent,
        
      },
      {
        path:'about-us',component: AboutUsComponent,canActivate: [AuthGuard]
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
        path:'user-home',component: UserHomeComponent,canActivate: [AuthGuard]
      },
      {
        path:'admin-home',component: AdminHomeComponent
      }
      
    ])
  ],
  providers: [AuthService,AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
