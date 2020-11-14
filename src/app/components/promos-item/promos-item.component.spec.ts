import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosItemComponent } from './promos-item.component';

describe('PromosItemComponent', () => {
  let component: PromosItemComponent;
  let fixture: ComponentFixture<PromosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromosItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
