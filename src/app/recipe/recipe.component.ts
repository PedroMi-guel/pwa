import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesServiceService } from '../services/recipes-service.service';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './recipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
  recipe!:Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesServiceService,
    private router:Router
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Obtiene el parámetro 'id'
      this.recipe = recipesService.getRecipe(+id!);
    });
  }

  goBack(){
    this.router.navigate(['/recipes'])
  }
}
