import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFoodPageComponent } from './favorite-food-page.component';

describe('FavoriteFoodPageComponent', () => {
  let component: FavoriteFoodPageComponent;
  let fixture: ComponentFixture<FavoriteFoodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteFoodPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
