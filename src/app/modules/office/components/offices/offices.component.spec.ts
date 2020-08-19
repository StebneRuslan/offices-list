import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesComponent } from './offices.component';
import { OfficesHeaderComponent } from '../offices-header/offices-header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { OfficeEditorComponent } from './office-editor/office-editor.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { OfficesFooterComponent } from '../offices-footer/offices-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('OfficesComponent', () => {
  let component: OfficesComponent;
  let fixture: ComponentFixture<OfficesComponent>;
  const storeMock = {
    select: () => of([]),
    dispatch: () => {
      console.log('Mock dispatch');
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfficesComponent,
        OfficesHeaderComponent,
        ButtonComponent,
        OfficeEditorComponent,
        OfficeCardComponent,
        OfficesFooterComponent
      ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
