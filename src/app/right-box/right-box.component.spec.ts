import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBoxComponent } from './right-box.component';

describe('RightBoxComponent', () => {
  let component: RightBoxComponent;
  let fixture: ComponentFixture<RightBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightBoxComponent]
    });
    fixture = TestBed.createComponent(RightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
