import { Component, Input, OnInit } from '@angular/core';
// import { RouterModule, Routes, Router, ActivatedRoute } 	from '@angular/router';
import { ActivatedRoute, Router} from '@angular/router';

import { UsersService } from '.././users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
// export class UsersComponent implements OnInit{
//   users: User[];
export class UsersComponent implements OnInit{
  
	@Input() user;

	constructor (private route: Router,
				private activateRoute: ActivatedRoute,
				private userService: UsersService) {
	}
	
	
	ngOnInit() {

	}
 	 
 		
}
