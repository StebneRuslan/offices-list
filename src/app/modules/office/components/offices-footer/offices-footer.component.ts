import { Component, OnInit } from '@angular/core';
import { AnimationsColorModel } from '../../../../shared/models/animations-color.model';

@Component({
  selector: 'app-offices-footer',
  templateUrl: './offices-footer.component.html',
  styleUrls: ['./offices-footer.component.scss']
})
export class OfficesFooterComponent implements OnInit {
  public animationColorModel = new AnimationsColorModel('rgb(23, 87, 134)', 'rgb(255, 255, 255)');
  constructor() { }
  public ngOnInit(): void {}
}
