import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRecipeComponent } from './new-recipe.component';
import { RecipesService } from '../recipes.service';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewRecipeComponent', () => {
  let component: NewRecipeComponent;
  let fixture: ComponentFixture<NewRecipeComponent>;
  let recipesService: jasmine.SpyObj<RecipesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('RecipesService', ['addRecipe']);

    TestBed.configureTestingModule({
      imports: [NewRecipeComponent, FormsModule],
      providers: [{ provide: RecipesService, useValue: spy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecipeComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(
      RecipesService
    ) as jasmine.SpyObj<RecipesService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add an ingredient', () => {
    const inputElement = { value: 'Tomato' } as HTMLInputElement;
    component.addIngredient(inputElement);
    expect(component.ingredientsArray.length).toBe(1);
    expect(component.ingredientsArray[0].name).toBe('Tomato');
    expect(inputElement.value).toBe('');
  });

  it('should not add empty ingredients', () => {
    const inputElement = { value: '' } as HTMLInputElement;
    component.addIngredient(inputElement);
    expect(component.ingredientsArray.length).toBe(0);
  });

  it('should submit the form and call RecipesService.addRecipe', () => {
    const form = {
      value: {
        name: 'Pizza',
        description: 'Delicious cheese pizza',
      },
      reset: jasmine.createSpy('reset'),
    } as any;
    component.ingredientsArray.push({ name: 'Tomato' });
    component.onSubmit(form);

    expect(recipesService.addRecipe).toHaveBeenCalled();
    expect(form.reset).toHaveBeenCalled();
  });

  it('should clear the form', () => {
    const form = {
      reset: jasmine.createSpy('reset'),
    } as any;

    component.onClear(form);
    expect(form.reset).toHaveBeenCalled();
  });

  it('should map ingredients correctly when submitting', () => {
    const form = {
      value: {
        name: 'Pizza',
        description: 'Delicious cheese pizza',
      },
      reset: jasmine.createSpy('reset'),
    } as any;

    component.ingredientsArray.push({ name: 'Tomato' });
    component.onSubmit(form);

    expect(
      recipesService.addRecipe.calls.mostRecent().args[0].ingredients!.length
    ).toBe(1);
    expect(
      recipesService.addRecipe.calls.mostRecent().args[0].ingredients![0].name
    ).toBe('Tomato');
  });
});
