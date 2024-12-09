import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialDocumentsComponent } from './official-documents.component';

describe('OfficialDocumentsComponent', () => {
  let component: OfficialDocumentsComponent;
  let fixture: ComponentFixture<OfficialDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficialDocumentsComponent]
    });
    fixture = TestBed.createComponent(OfficialDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
