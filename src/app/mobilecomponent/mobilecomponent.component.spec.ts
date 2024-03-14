import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomponentComponent } from './mobilecomponent.component';

describe('MobilecomponentComponent', () => {
  let component: MobilecomponentComponent;
  let fixture: ComponentFixture<MobilecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
