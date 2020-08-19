import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesFooterComponent } from './offices-footer.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OfficesFooterComponent', () => {
  let component: OfficesFooterComponent;
  let fixture: ComponentFixture<OfficesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfficesFooterComponent,
        ButtonComponent
      ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
