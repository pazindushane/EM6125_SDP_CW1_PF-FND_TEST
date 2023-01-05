import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangeStationsComponent } from './manange-stations.component';

describe('ManangeStationsComponent', () => {
  let component: ManangeStationsComponent;
  let fixture: ComponentFixture<ManangeStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangeStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManangeStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
