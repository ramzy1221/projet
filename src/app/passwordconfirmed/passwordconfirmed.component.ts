import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passwordconfirmed',
  templateUrl: './passwordconfirmed.component.html',
  styleUrls: ['./passwordconfirmed.component.scss']
})
export class PasswordconfirmedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    setTimeout(() => {
    this.router.navigate(['']);
    }, 5000);  //5s
 
   }

}
