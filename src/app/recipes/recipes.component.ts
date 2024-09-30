import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesServiceService } from './../services/recipes-service.service';
import { Recipe } from '../interfaces/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
  CommonModule,
  ],
  templateUrl: './recipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  list:Recipe[] = [];

  constructor(
    private recipiesService:RecipesServiceService,
    private router: Router

  ){
    this.list = this.recipiesService.getRecipes;
  }

  navigate(id: number){
    this.router.navigate([`recipe/${id}`])
  }

  goBack(){
    this.router.navigate(['/'])
  }
}
