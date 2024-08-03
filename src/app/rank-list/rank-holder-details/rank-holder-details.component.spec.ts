import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankHolderDetailsComponent } from './rank-holder-details.component';

describe('RankHolderDetailsComponent', () => {
  let component: RankHolderDetailsComponent;
  let fixture: ComponentFixture<RankHolderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankHolderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankHolderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
