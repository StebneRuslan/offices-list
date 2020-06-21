import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesFooterComponent } from './offices-footer.component';

describe('OfficesFooterComponent', () => {
  let component: OfficesFooterComponent;
  let fixture: ComponentFixture<OfficesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesFooterComponent ]
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
