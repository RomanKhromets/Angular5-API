import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '.././users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  
	@Input() user;

	constructor () {}

	ngOnInit() {

	}
}
