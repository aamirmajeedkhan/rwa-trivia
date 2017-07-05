import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaUpsertComponent } from './qna-upsert.component';

describe('QnaAddComponent', () => {
  let component: QnaUpsertComponent;
  let fixture: ComponentFixture<QnaUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnaUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
