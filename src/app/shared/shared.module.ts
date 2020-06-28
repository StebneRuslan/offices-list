import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalMessageComponent
  ],
  exports: [
    ButtonComponent,
    ModalMessageComponent
  ],
  entryComponents: [
    ModalMessageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
