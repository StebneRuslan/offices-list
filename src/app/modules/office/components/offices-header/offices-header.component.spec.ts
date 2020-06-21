import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesHeaderComponent } from './offices-header.component';

describe('OfficesHeaderComponent', () => {
  let component: OfficesHeaderComponent;
  let fixture: ComponentFixture<OfficesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
