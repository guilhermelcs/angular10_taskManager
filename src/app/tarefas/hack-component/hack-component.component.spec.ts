import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackComponentComponent } from './hack-component.component';

describe('HackComponentComponent', () => {
  let component: HackComponentComponent;
  let fixture: ComponentFixture<HackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
