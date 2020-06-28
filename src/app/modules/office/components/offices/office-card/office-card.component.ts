import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfficeModel } from '../../../../../shared/models/office.model';
import { AnimationsColorModel } from '../../../../../shared/models/animations-color.model';
import { OfficeRenderModel } from '../../../../../shared/models/office-render.model';
import { MatDialog } from '@angular/material';
import { ModalMessageComponent } from '../../../../../shared/components/modal-message/modal-message.component';
import { ModalMessageModel } from '../../../../../shared/models/modal-message.model';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss']
})
export class OfficeCardComponent implements OnInit {
  @Input() office: OfficeModel;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();
  @Output() openEditForm: EventEmitter<string> = new EventEmitter<string>();
  public renderOffice: OfficeRenderModel;
  public animationColorModel = new AnimationsColorModel('rgb(23, 87, 134)', 'rgb(255, 255, 255)');
  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.renderOffice = new OfficeRenderModel(this.office);
  }

  public removeOffice(): void {
    const dialogRef = this.dialog.open(ModalMessageComponent, {
      data: new ModalMessageModel(true, true, 'Are you sure?')
    });
    dialogRef.afterClosed().subscribe(doRemove => {
      if (doRemove) {
        this.remove.emit(this.office.id);
      }
    });
  }

  public edit(): void {
    this.openEditForm.emit(this.office.id);
  }
}
