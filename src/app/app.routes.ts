import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'recipes',
    pathMatch: 'full',
    component: RecipesComponent
  },
  {
    path: 'recipe/:id',
    pathMatch: 'full',
    component: RecipeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: TodoComponent
  },


];
