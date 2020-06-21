import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ButtonHoverStateTrigger } from '../../animations/button.animation';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [ButtonHoverStateTrigger]
})
export class ButtonComponent implements OnInit {
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  public isOpenState = false;
  constructor() { }

  public ngOnInit(): void {}

  public handleAnimationState(state: boolean): void {
    this.isOpenState = state;
  }

  public handleButtonClick(): void {
    this.handleClick.emit();
  }
}
