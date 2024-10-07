import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeListItemComponent } from './recipe-list-item.component';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { ComponentRef } from '@angular/core';
import { By } from '@angular/platform-browser';

const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;

describe('RecipeListItemComponent', () => {
  let component: RecipeListItemComponent;
  let fixture: ComponentFixture<RecipeListItemComponent>;
  let componentRef: ComponentRef<RecipeListItemComponent>;
  let mockRecipe: Recipe;

  beforeEach(async () => {
    mockRecipe = {
      id: '1',
      name: 'Test Recipe',
      description: 'Test Recipe Description',
      imagePath: 'http://localhost:9876/path/to/image.jpg',
    };

    await TestBed.configureTestingModule({
      imports: [RecipeListItemComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('recipe', mockRecipe);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display recipe name in the card title', () => {
    const titleElement = fixture.debugElement.query(
      By.css('mat-card-title')
    ).nativeElement;
    expect(titleElement.textContent).toContain(mockRecipe.name);
  });

  it('should display recipe image', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toBe(mockRecipe.imagePath);
  });

  it('should have a routerLink pointing to the recipe id', () => {
    const cardElement = fixture.debugElement.query(
      By.css('mat-card')
    ).nativeElement;
    expect(cardElement.getAttribute('ng-reflect-router-link')).toBe(
      mockRecipe.id
    );
  });
});
