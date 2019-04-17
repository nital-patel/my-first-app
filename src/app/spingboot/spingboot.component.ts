import { Component, OnInit } from '@angular/core';
import {SpringbootService, Test} from './springboot.service';

@Component({
  selector: 'app-spingboot',
  templateUrl: './spingboot.component.html',
  styleUrls: ['./spingboot.component.css']
})
export class SpingbootComponent implements OnInit {

  message: string;
  dataFromNitalService: any[];

  constructor(private springBootService: SpringbootService) {
  }

  ngOnInit() {
    this.springBootService.getData().subscribe((data: Test[]) => {
      console.log(data);
      this.dataFromNitalService = data;
    });
  }
}
