import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinghomeComponent } from './routinghome.component';

describe('RoutinghomeComponent', () => {
  let component: RoutinghomeComponent;
  let fixture: ComponentFixture<RoutinghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
