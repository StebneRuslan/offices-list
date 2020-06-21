import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficesComponent } from './components/offices/offices.component';
import { RouterModule, Routes } from '@angular/router';
import { OfficesHeaderComponent } from './components/offices-header/offices-header.component';
import { SharedModule } from '../../shared/shared.module';
import { OfficesFooterComponent } from './components/offices-footer/offices-footer.component';

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
    OfficesFooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(officesRoutes)
  ]
})
export class OfficeModule { }
