import { Component, Input, OnInit } from '@angular/core';
import { MenuHoverContentStateTrigger } from '../../../../../shared/animations/menu.animation';
import { ButtonHoverStateTrigger } from '../../../../../shared/animations/button.animation';
import { TitleHoverTitleStateTrigger } from '../../../../../shared/animations/title.animation';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    TitleHoverTitleStateTrigger,
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
