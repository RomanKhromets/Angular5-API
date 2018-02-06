import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';


@Component({
	selector: 'app-first-album',
	templateUrl: './first-album.component.html',
	styleUrls: ['./first-album.component.css']
})


export class FirstAlbumComponent implements OnInit {

	users = [];

	constructor(private usersService: UsersService) {}
	
	ngOnInit() {
		this.usersService.getUsers().subscribe(users =>{
			this.users = users
		});
	}
}


