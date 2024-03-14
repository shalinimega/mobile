import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandcomponentComponent } from './brandcomponent.component';

describe('BrandcomponentComponent', () => {
  let component: BrandcomponentComponent;
  let fixture: ComponentFixture<BrandcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
