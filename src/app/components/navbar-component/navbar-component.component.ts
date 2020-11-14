import { Component, OnInit } from '@angular/core';
import { NAVOPTIONS } from 'src/app/data/mocks/navoptionsMocks';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  navoptions = NAVOPTIONS

  constructor() { }

  ngOnInit(): void {
  }

}
