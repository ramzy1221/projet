import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../sevices/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {
  
    token:any;
     msg:any    
    

 constructor(private router:Router ,private route:ActivatedRoute, private auth:DataService ,private http:HttpClient) {
   
  }

 error={
   password:null
 };
 message:any;


 ngOnInit(): void{
     this.route.queryParams.subscribe(param => {
       this.token = param['token'];
       
   })
 }
 onSubmit(form:NgForm){
   const password=form.value.password;
   const password_confirmation =form.value.passwordc;
   const tokenn=this.token; 
  
   

   this.auth.reset(this.token, password, password_confirmation).subscribe((res:any)=>{
     this.message = res.message;
     this.msg=1;
     console.log(this.token);
     //console.log(this.message)
     this.router.navigate(['/password-confirmed']);
    
   }, (err)=>{
     this.error =err.error.errors;
     //this.router.navigate(['Sucess']);
     console.log(this.error);
     this.msg=0;
    

    })
  }
 }
function go() {
 throw new Error('Function not implemented.');
}