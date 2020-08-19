import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCardComponent } from './office-card.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OfficeCardComponent', () => {
  let component: OfficeCardComponent;
  let fixture: ComponentFixture<OfficeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        OfficeCardComponent,
        ButtonComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
