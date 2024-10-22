import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowRoomComponent } from './form-show-room.component';

describe('FormShowRoomComponent', () => {
  let component: FormShowRoomComponent;
  let fixture: ComponentFixture<FormShowRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShowRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
