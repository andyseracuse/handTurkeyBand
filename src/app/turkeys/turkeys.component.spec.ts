import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeysComponent } from './turkeys.component';

describe('TurkeysComponent', () => {
  let component: TurkeysComponent;
  let fixture: ComponentFixture<TurkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
