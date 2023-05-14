import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfreelancerComponent } from './contentfreelancer.component';

describe('ContentfreelancerComponent', () => {
  let component: ContentfreelancerComponent;
  let fixture: ComponentFixture<ContentfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentfreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
