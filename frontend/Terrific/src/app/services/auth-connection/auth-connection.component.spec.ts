import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthConnectionComponent } from './auth-connection.component';

describe('AuthConnectionComponent', () => {
  let component: AuthConnectionComponent;
  let fixture: ComponentFixture<AuthConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
