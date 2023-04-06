import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharsPanelComponent } from './chars-panel.component';

describe('CharsPanelComponent', () => {
  let component: CharsPanelComponent;
  let fixture: ComponentFixture<CharsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
