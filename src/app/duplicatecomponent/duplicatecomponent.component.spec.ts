import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatecomponentComponent } from './duplicatecomponent.component';

describe('DuplicatecomponentComponent', () => {
  let component: DuplicatecomponentComponent;
  let fixture: ComponentFixture<DuplicatecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuplicatecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuplicatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
