import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonHoverStateTrigger } from '../../animations/button.animation';
import { AnimationsColorModel } from '../../models/animations-color.model';
import { TitleHoverTitleStateTrigger } from '../../animations/title.animation';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    TitleHoverTitleStateTrigger,
    ButtonHoverStateTrigger
  ]
})
export class ButtonComponent implements OnInit {
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  @Input() animationColorConfig: AnimationsColorModel = new AnimationsColorModel();

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
