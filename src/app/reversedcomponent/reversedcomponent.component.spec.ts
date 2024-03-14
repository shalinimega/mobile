import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedcomponentComponent } from './reversedcomponent.component';

describe('ReversedcomponentComponent', () => {
  let component: ReversedcomponentComponent;
  let fixture: ComponentFixture<ReversedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReversedcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReversedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
