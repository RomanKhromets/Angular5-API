import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule }				from '@angular/core';
import { HttpModule }         from '@angular/http';
import { RouterModule} 	from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } 		from './app.component';
import { UsersComponent }      	from './users/users.component';
import { FirstAlbumComponent } from './first-album/first-album.component';
import { SecondAlbumComponent } from './second-album/second-album.component';
import { ThirdAlbumComponent } from './third-album/third-album.component';
import { UsersSecondComponent } from './users-second/users-second.component';

import { UsersService } from './users.service';
import { UsersThirdComponent } from './users-third/users-third.component';


const routes = [
  {path: '', component: FirstAlbumComponent },
  {path: 'second/:id', component: SecondAlbumComponent },
  {path: 'second/:id/third/:id', component: ThirdAlbumComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FirstAlbumComponent,
    SecondAlbumComponent,
    ThirdAlbumComponent,
    UsersSecondComponent,
    UsersThirdComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
