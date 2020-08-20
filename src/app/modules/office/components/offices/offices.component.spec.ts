import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesComponent } from './offices.component';
import { OfficesHeaderComponent } from '../offices-header/offices-header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { OfficeEditorComponent } from './office-editor/office-editor.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { OfficesFooterComponent } from '../offices-footer/offices-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

describe('OfficesComponent', () => {
  let component: OfficesComponent;
  let fixture: ComponentFixture<OfficesComponent>;

  const initialState = { officesState: { entities: {}, ids: [] }};
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
        provideMockStore({ initialState })
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
