import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  logged:boolean = false;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.logged = this.userService.isLoggedUser();
  }

  logOut(){
    this.userService.logout();
    location.pathname = '/login';
  }

}
