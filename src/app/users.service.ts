import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {

	constructor (private http: Http) {}

	private detailUrl = 'https://jsonplaceholder.typicode.com/photos/';
	private userIdUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/albums')
			.map(function(response) {
				return response.json();
			})
			// .map(response => response.json())
	}

	getUserId(id) {
		// console.log(id);
		return this.http.get( this.userIdUrl+id )
			.map(function(response) {
				return response.json();
		})
	}

	getDetails(id){
		// console.log(id);
		return this.http.get( this.detailUrl+id )
			.map(response => response.json());
	};

}