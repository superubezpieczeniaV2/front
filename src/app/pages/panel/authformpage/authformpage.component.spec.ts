import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthformpageComponent } from './authformpage.component';

describe('AuthformpageComponent', () => {
  let component: AuthformpageComponent;
  let fixture: ComponentFixture<AuthformpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthformpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
