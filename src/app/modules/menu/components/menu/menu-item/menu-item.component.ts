import { Component, Input, OnInit } from '@angular/core';
import { MenuHoverTitleStateTrigger, MenuHoverContentStateTrigger } from '../../../../../shared/animations/menu.animation';
import { ButtonHoverStateTrigger } from '../../../../../shared/animations/button.animation';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    MenuHoverTitleStateTrigger,
    MenuHoverContentStateTrigger,
    ButtonHoverStateTrigger
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() title: string;
  public isOpenState = false;
  constructor() { }

  public handleAnimationState(state: boolean): void {
    this.isOpenState = state;
  }

  ngOnInit() {
  }

}
