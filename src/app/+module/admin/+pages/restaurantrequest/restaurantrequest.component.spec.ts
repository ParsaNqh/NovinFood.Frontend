import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantrequestComponent } from './restaurantrequest.component';

describe('RestaurantrequestComponent', () => {
  let component: RestaurantrequestComponent;
  let fixture: ComponentFixture<RestaurantrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
