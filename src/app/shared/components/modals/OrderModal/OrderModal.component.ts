import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { createOfflineCompileUrlResolver } from "@angular/compiler";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-OrderModal",
  templateUrl: "./OrderModal.component.html",
  styleUrls: ["./OrderModal.component.css"]
})
export class OrderModalComponent implements OnInit {
  @Input() config;
  orderForm: FormGroup;

  constructor(public modal: NgbActiveModal, public fb: FormBuilder) {}

  ngOnInit() {
    this.setForm();
    console.log("here", this.config);
  }

  setForm() {
    this.orderForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });
  }

  onSubmit() {
    console.log("form: ", this.orderForm);
    console.log("form: ", this.orderForm.controls.name.value);
  }
}
