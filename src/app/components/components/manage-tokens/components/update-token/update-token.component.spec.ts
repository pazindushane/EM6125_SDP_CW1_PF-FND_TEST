import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTokenComponent } from './update-token.component';

describe('UpdateTokenComponent', () => {
  let component: UpdateTokenComponent;
  let fixture: ComponentFixture<UpdateTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
