import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Batata Gratinada', 'Batatas cozidas e assadas com creme e cobertura.', 'https://img.itdg.com.br/tdg/images/recipes/000/105/255/331902/331902_original.jpg?mode=crop&width=710&height=400'),
    new Recipe('Torta de Frango', 'Torta de frango de liquidificador.', 'https://img.itdg.com.br/tdg/images/recipes/000/001/282/317634/317634_original.jpg?mode=crop&width=710&height=400'),
    new Recipe('Bobó de Camarão', 'Clássico prato baiano.', 'https://img.itdg.com.br/tdg/images/recipes/000/000/112/318669/318669_original.jpg?mode=crop&width=710&height=400')
  ];

  getRecipes(){
    //.slice retorna nova array, uma copia
    return this.recipes.slice();
  }

}
