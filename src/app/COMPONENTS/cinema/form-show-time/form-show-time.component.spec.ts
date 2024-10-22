import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowTimeComponent } from './form-show-time.component';

describe('FormShowTimeComponent', () => {
  let component: FormShowTimeComponent;
  let fixture: ComponentFixture<FormShowTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShowTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
