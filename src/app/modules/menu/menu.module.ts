import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuHeaderComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MenuModule { }
