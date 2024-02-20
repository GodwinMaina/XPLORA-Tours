import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConnectionComponent } from './api-connection.component';

describe('ApiConnectionComponent', () => {
  let component: ApiConnectionComponent;
  let fixture: ComponentFixture<ApiConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
