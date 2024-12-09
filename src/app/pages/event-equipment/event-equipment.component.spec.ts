import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEquipmentComponent } from './event-equipment.component';

describe('EventEquipmentComponent', () => {
  let component: EventEquipmentComponent;
  let fixture: ComponentFixture<EventEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventEquipmentComponent]
    });
    fixture = TestBed.createComponent(EventEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
