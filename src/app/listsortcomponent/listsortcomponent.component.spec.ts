import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsortcomponentComponent } from './listsortcomponent.component';

describe('ListsortcomponentComponent', () => {
  let component: ListsortcomponentComponent;
  let fixture: ComponentFixture<ListsortcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsortcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsortcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
