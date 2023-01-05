import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTokensComponent } from './manage-tokens.component';

describe('ManageTokensComponent', () => {
  let component: ManageTokensComponent;
  let fixture: ComponentFixture<ManageTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
