import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/login.service';

@Component({
  selector: 'app-bas-navbar',
  templateUrl: './bas-navbar.component.html',
  styleUrls: ['./bas-navbar.component.css']
})
export class BasNavbarComponent implements OnInit {

  constructor( private router: Router,
               private user: UserService) { }

  ngOnInit() {
  }

}
