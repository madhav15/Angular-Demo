import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-OrderModal",
  templateUrl: "./OrderModal.component.html",
  styleUrls: ["./OrderModal.component.css"]
})
export class OrderModalComponent implements OnInit {
  @Input() config;
  orderForm: FormGroup;

  constructor(public modal: NgbActiveModal, public fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.orderForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });
  }

  onSubmit() {
    window.confirm("Do you want to continue");
    console.log("form: ", this.orderForm.value);
    console.log("form: ", this.orderForm.controls.name.value);
    console.log("Config", this.config);
    
    this.router.navigate(['/']);
    }
}
