import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopesComponent } from './endoscopes.component';

describe('EndoscopesComponent', () => {
  let component: EndoscopesComponent;
  let fixture: ComponentFixture<EndoscopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndoscopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoscopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
