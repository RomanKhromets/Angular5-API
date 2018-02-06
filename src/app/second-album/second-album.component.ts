import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { UsersService } from '.././users.service';

@Component({
  selector: 'app-second-album',
  templateUrl: './second-album.component.html',
  styleUrls: ['./second-album.component.css']
})

export class SecondAlbumComponent implements OnInit {

  users = [];
 
  constructor(private usersService: UsersService,
          private route: ActivatedRoute,
          private router: Router,) {}

  ngOnInit() {

   let id;

    this.route.params
    .subscribe(params => { id = params.id });
        // console.log(id);

    this.usersService.getUserId(id).subscribe(users =>{
      this.users = users
      // console.log(this.users)
  });
  }

}
