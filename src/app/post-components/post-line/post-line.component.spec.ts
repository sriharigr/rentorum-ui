import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLineComponent } from './post-line.component';

describe('PostLineComponent', () => {
  let component: PostLineComponent;
  let fixture: ComponentFixture<PostLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
