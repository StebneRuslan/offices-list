import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalMessageModel } from '../../models/modal-message.model';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalMessageModel,
    private mdDialogRef: MatDialogRef<ModalMessageComponent>
  ) { }

  public ngOnInit(): void {}

  public close(status: boolean): void {
    this.mdDialogRef.close(status);
  }
}
