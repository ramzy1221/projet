import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor( private http:HttpClient) { }



 login(email:String , password:String ){
   const data={
    email:email,
    password:password

   }
  return this.http.post('http://127.0.0.1:8000/api/login',data)
}


reset(token:string , password:string , password_confirmation:string){
  const data={
    token:token,
    password:password,
    password_confirmation: password_confirmation

   }
  return this.http.post('http://127.0.0.1:8000/api/reset-password',data)
}


forgot(email:string){
  const data={
    email:email,
  

   }
  return this.http.post('http://127.0.0.1:8000/api/forgot-password',data)
}



}
