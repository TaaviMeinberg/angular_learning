import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbCardComponent } from './proverb-card.component';

describe('ProverbCardComponent', () => {
  let component: ProverbCardComponent;
  let fixture: ComponentFixture<ProverbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProverbCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProverbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
