import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareStoryComponent } from './software-story.component';

describe('SoftwareStoryComponent', () => {
  let component: SoftwareStoryComponent;
  let fixture: ComponentFixture<SoftwareStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
