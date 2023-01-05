import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStocksComponent } from './update-stocks.component';

describe('UpdateStocksComponent', () => {
  let component: UpdateStocksComponent;
  let fixture: ComponentFixture<UpdateStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
