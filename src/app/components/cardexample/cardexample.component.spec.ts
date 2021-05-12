import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexampleComponent } from './cardexample.component';

describe('CardexampleComponent', () => {
  let component: CardexampleComponent;
  let fixture: ComponentFixture<CardexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
