import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirm-panel',
  templateUrl: './order-confirm-panel.component.html',
  styleUrls: ['./order-confirm-panel.component.css']
})
export class OrderConfirmPanelComponent implements OnInit {

  public contactNumber : string = '+91 8080586933';
  constructor() { }

  ngOnInit() {
  }

}
