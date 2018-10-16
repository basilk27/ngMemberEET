import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployerProfileComponent } from './create-employer-profile.component';

describe('CreateEmployerProfileComponent', () => {
  let component: CreateEmployerProfileComponent;
  let fixture: ComponentFixture<CreateEmployerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
