import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bas-navbar',
  templateUrl: './bas-navbar.component.html',
  styleUrls: ['./bas-navbar.component.css']
})
export class BasNavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

}
