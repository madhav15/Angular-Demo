import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private ganesh_desc = "Beautiful 3D image of Lord Ganesha" ;

  private price = 799;

  constructor() { }

  ngOnInit() {
  }

}
