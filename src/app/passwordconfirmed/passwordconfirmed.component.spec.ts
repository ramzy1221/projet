import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordconfirmedComponent } from './passwordconfirmed.component';

describe('PasswordconfirmedComponent', () => {
  let component: PasswordconfirmedComponent;
  let fixture: ComponentFixture<PasswordconfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordconfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
