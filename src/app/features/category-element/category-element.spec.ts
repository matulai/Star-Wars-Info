import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryElement } from './category-element';

describe('CategoryElement', () => {
  let component: CategoryElement;
  let fixture: ComponentFixture<CategoryElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
