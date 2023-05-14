import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rightnavbar1Component } from './rightnavbar1.component';

describe('Rightnavbar1Component', () => {
  let component: Rightnavbar1Component;
  let fixture: ComponentFixture<Rightnavbar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rightnavbar1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rightnavbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
