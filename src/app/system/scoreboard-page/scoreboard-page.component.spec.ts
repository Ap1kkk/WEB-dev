import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardPageComponent } from './scoreboard-page.component';

describe('ScoreboardPageComponent', () => {
  let component: ScoreboardPageComponent;
  let fixture: ComponentFixture<ScoreboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreboardPageComponent]
    });
    fixture = TestBed.createComponent(ScoreboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
