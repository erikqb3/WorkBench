import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) //injecting router
  { }

  ngOnInit() {
  }

  onLoadServers(id: number){
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: 1},
        fragment: "loading"}
      ); //navigate(), bulit in function in the router
  }
  
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
