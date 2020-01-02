import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';


@Component({
  selector: "app-OrderModal",
  templateUrl: "./OrderModal.component.html",
  styleUrls: ["./OrderModal.component.css"]
})
export class OrderModalComponent implements OnInit {
  @Input() config;
  orderForm: FormGroup;

  private server_url: string = "http://localhost:3000/createOrder";

  constructor(public modal: NgbActiveModal, public fb: FormBuilder, public router: Router,
    public spinnerService: NgxSpinnerService, public http: HttpClient) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.orderForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ["", [Validators.required]]
    });
  }

  onSubmit() {
    /**
     * Start Loading .
     * TODO : Create page for order success. 
     * Create API for send email.
     * On Success redirect to above thank you page.
     * On Error show error message.
     */
    let customer: Customer = this.createCustomerData();
    if (customer.email != null || customer.email != "") {
      this.spinnerService.show();
      this.http.post(this.server_url, customer).subscribe(result => {
        console.log(result);
        this.spinnerService.hide();
        this.router.navigate(['/order-confirm']);
      },
        (error) => {
          this.spinnerService.hide();
          window.alert("Error" + JSON.stringify(error));
        });
    }

  }
  /** Method to create the customer order data */
  private createCustomerData() {
    let customer: Customer = new Customer();

    customer.name = this.orderForm.controls.name.value;
    customer.email = this.orderForm.controls.email.value;
    customer.phone = this.orderForm.controls.phone.value;
    customer.address = this.orderForm.controls.address.value;

    customer.product_number = this.config.id;
    customer.product_name = this.config.name;
    customer.product_price = this.config.price;

    console.log("Prepared object " + JSON.stringify(customer));

    return customer;
  }
}
