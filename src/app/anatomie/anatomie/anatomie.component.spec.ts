import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomieComponent } from './anatomie.component';

describe('AnatomieComponent', () => {
  let component: AnatomieComponent;
  let fixture: ComponentFixture<AnatomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnatomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnatomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
