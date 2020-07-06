import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficesComponent } from './components/offices/offices.component';
import { RouterModule, Routes } from '@angular/router';
import { OfficesHeaderComponent } from './components/offices-header/offices-header.component';
import { SharedModule } from '../../shared/shared.module';
import { OfficesFooterComponent } from './components/offices-footer/offices-footer.component';
import { OfficeCardComponent } from './components/offices/office-card/office-card.component';
import { OfficeEditorComponent } from './components/offices/office-editor/office-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromOfficesState from './reducers';

export const officesRoutes: Routes = [
  {
    path: '',
    component: OfficesComponent,
  }
];

@NgModule({
  declarations: [
    OfficesComponent,
    OfficesHeaderComponent,
    OfficesFooterComponent,
    OfficeCardComponent,
    OfficeEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(officesRoutes),
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromOfficesState.officesStateFeatureKey,
      fromOfficesState.officesReducers
    )
  ]
})
export class OfficeModule { }
