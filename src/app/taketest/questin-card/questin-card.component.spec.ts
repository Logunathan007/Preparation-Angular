import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestinCardComponent } from './questin-card.component';

describe('QuestinCardComponent', () => {
  let component: QuestinCardComponent;
  let fixture: ComponentFixture<QuestinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestinCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
