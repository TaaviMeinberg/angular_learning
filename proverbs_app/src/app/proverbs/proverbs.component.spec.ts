import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbsComponent } from './proverbs.component';

describe('ProverbsComponent', () => {
  let component: ProverbsComponent;
  let fixture: ComponentFixture<ProverbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProverbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
