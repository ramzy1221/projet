import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/sevices/data.service';
import { Login, User } from '../../../login/login.model';







@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {  
   
  
 
  constructor(private auth:DataService, private http:HttpClient) { }
  type:any;
  data:any;
  ngOnInit() {
    
    //console.log(user.)


    


  }
 
}
