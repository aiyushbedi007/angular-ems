import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirysComponent } from './enquirys.component';

describe('EnquirysComponent', () => {
  let component: EnquirysComponent;
  let fixture: ComponentFixture<EnquirysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
