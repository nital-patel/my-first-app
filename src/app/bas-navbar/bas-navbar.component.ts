import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-bas-navbar',
  templateUrl: './bas-navbar.component.html',
  styleUrls: ['./bas-navbar.component.css']
})
export class BasNavbarComponent implements OnInit {
  title = 'Acme Product Management';

  constructor( private router: Router,
               private user: LoginService) { }

  ngOnInit() {
  }

}
