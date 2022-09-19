import { ComponentFixture, TestBed } from '@angular/core/testing';

import { component3Component } from './component3.component';

describe('component3Component', () => {
  let component: component3Component;
  let fixture: ComponentFixture<component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ component3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
