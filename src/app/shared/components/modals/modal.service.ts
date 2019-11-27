import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { OrderModalComponent } from "./OrderModal/OrderModal.component";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor(private ngbModal: NgbModal) {}

  showOrderModal(title): NgbModalRef {
    const modalRef = this.ngbModal.open(OrderModalComponent, {
      windowClass:
        "md-dialog md-dialog-centered md-dialog-sm action-sheet-modal"
    });
    modalRef.componentInstance.config = title;
    return modalRef;
  }
}
