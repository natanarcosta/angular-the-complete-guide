import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Batata Gratinada', 'Batatas cozidas e assadas com creme e cobertura.', 'https://img.itdg.com.br/tdg/images/recipes/000/105/255/331902/331902_original.jpg?mode=crop&width=710&height=400'),
    new Recipe('Torta de Frango', 'Torta de frango de liquidificador.', 'https://img.itdg.com.br/tdg/images/recipes/000/001/282/317634/317634_original.jpg?mode=crop&width=710&height=400'),
    new Recipe('Bobó de Camarão', 'Clássico prato baiano.', 'https://img.itdg.com.br/tdg/images/recipes/000/000/112/318669/318669_original.jpg?mode=crop&width=710&height=400')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
