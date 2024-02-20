import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpageComponent } from './tourpage.component';

describe('TourpageComponent', () => {
  let component: TourpageComponent;
  let fixture: ComponentFixture<TourpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
