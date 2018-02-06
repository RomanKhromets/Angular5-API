import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


import { UsersService } from '.././users.service';


@Component({
  selector: 'app-users-second',
  templateUrl: './users-second.component.html',
  styleUrls: ['./users-second.component.css']
})
export class UsersSecondComponent implements OnInit {

	@Input() user;

  constructor() { }

  onClick(){
  	// console.log(this.user.id);
  }

  ngOnInit() {
  } 

}
