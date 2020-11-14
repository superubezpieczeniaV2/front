import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHeaderComponentComponent } from './start-header-component.component';

describe('StartHeaderComponentComponent', () => {
  let component: StartHeaderComponentComponent;
  let fixture: ComponentFixture<StartHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
