import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { UsersService } from '.././users.service';


@Component({
  selector: 'app-users-third',
  templateUrl: './users-third.component.html',
  styleUrls: ['./users-third.component.css']
})
export class UsersThirdComponent implements OnInit {

	@Input() user;

  constructor(private route: Router,
				private activateRoute: ActivatedRoute,
  				private usersService: UsersService) { }

  ngOnInit() {
  }

}
