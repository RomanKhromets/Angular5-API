import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '.././users.service';

@Component({
  selector: 'app-third-album',
  templateUrl: './third-album.component.html',
  styleUrls: ['./third-album.component.css']
})
export class ThirdAlbumComponent implements OnInit {

	  users = [];
    private id: number;

  constructor(private usersService: UsersService,
          private route: ActivatedRoute) {}

    ngOnInit() {

   let id;

    this.route.params
    .subscribe(params => id = params.id );
        // console.log(id);

    this.usersService.getDetails(id).subscribe(users =>{
      this.users = users
      // console.log(this.users);
  });
  }

}
