import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: '../users/users.component.html',
  styleUrls: ['../users/users.component.css']
})
export class UsersComponent {
  @Input() user;
  isMarked = false;
  onClick() {
    // if (this.isMarked === true) {
    //   this.isMarked = false;
    // } else {
    //   this.isMarked = true
    // }
    this.isMarked = this.isMarked !== true;

  }
}
