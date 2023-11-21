import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityComponent } from './unity.component';

describe('UnityComponent', () => {
  let component: UnityComponent;
  let fixture: ComponentFixture<UnityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnityComponent]
    });
    fixture = TestBed.createComponent(UnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
