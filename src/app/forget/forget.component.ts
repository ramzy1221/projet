import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  wait:boolean=false;

  error={
    email:null
  };
  message:any;
  constructor(private http:HttpClient ,private auth:DataService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.wait=true;
    const email=form.value.email;
    this.auth.forgot(email).subscribe((res:any)=>{
        this.message=res.message;
        this.wait=false;

      console.log(this.message)
      },
      (err)=>{
        this.error=err.error.errors;
        this.wait=false;
        console.log(this.error)
      })  
  }
}
