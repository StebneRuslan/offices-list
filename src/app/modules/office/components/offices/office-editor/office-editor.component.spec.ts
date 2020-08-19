import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeEditorComponent } from './office-editor.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OfficeEditorComponent', () => {
  let component: OfficeEditorComponent;
  let fixture: ComponentFixture<OfficeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfficeEditorComponent,
        ButtonComponent
      ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
