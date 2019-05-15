import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URLHelper } from './URLHelper';
// import { Icu } from '@angular/compiler/src/render3/r3_ast';
import { ProductModel } from './productModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urls = URLHelper.urls;

  constructor(private http:HttpClient,
              private router:Router) { }

  registerUser(register)
  {
    return this.http.post("http://localhost:3209/api/register",register);
  }

  loginUser(login)
  {
    return this.http.post("http://localhost:3209/api/login",login);
  }

  loginAdmin(login){
    return this.http.post("http://localhost:3209/api/admin_login",login);
  }

  registerAdmin(register){
    return this.http.post("http://localhost:3209/api/admin_reg",register);
  }

  addProduct(prod){
    return this.http.post("http://localhost:3209/api/addProduct",prod);
  }

  getProducts(){
    return this.http.get("http://localhost:3209/api/getProduct");
  }

  getProductsByID(id){
    return this.http.get("http://localhost:3209/api/getProdById/" +id);
  }

  // updateProduct(product:ProductModel){
  //   return this.http.put("http://localhost:3209/api/updateProduct/" +product._id,product);
  // }

  updateProduct(prodId,prodName,prodPrice,prodDesc,prodImage,_id){

    const obj = {
      prodId:prodId,
      prodName:prodName,
      prodPrice:prodPrice,
      prodDesc:prodDesc,
      prodImage:prodImage
    }
    this.http.put("http://localhost:3209/api/updateProduct/"+_id,obj).subscribe(
      (res)=>{
        console.log('Done');
        console.log(res);
        console.log(obj);
      }
    )

  }

  // updateProduct(product: ProductModel){
  //   return this.http.put("http://localhost:3209/api/updateProduct" + '/' + product._id, product);
  // }

  deleteProduct(id){
    return this.http.delete("http://localhost:3209/api/deleteProduct/"+id);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.urls.userhome=false;
    this.urls.cart=false;
    this.urls.logout=false;
    this.urls.login=true;
    this.urls.register=true;
    this.urls.home=true;
    this.urls.adminhome=false;
    this.urls.adminpage=false;
    // this.urls.products=false;
    this.urls.admin=true;
    this.urls.aboutus=true;
    this.router.navigate(['']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
