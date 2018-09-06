import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-ome-page',
  templateUrl: './ome-page.component.html',
  styleUrls: ['./ome-page.component.css']
})
export class OmePageComponent implements OnInit {

  users = [];
  searchStr= '';
  constructor(private usersService: UserService){
  }
  ngOnInit() {
    // this.users = this.usersService.users
    this.usersService.getUsers().subscribe(users =>{
      this.users = users
    })
  }

}
