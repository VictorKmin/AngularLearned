import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmePageComponent } from './ome-page.component';

describe('OmePageComponent', () => {
  let component: OmePageComponent;
  let fixture: ComponentFixture<OmePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
