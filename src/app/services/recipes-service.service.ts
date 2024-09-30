import { Injectable } from '@angular/core';
import { Recipe } from './../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  constructor() { }

  recipes:Recipe[] = [
    {
    id: 0,
    name: 'Pan Francés Tiramisú',
    image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/aa1b0f5a60a61678209522016e14fb93.webp?itok=XRgUPaIs',
    recipe: '1.Mezcla la Leche Evaporada CARNATION® CLAVEL®, 1 cucharada de cocoa, ½ cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®, el huevo y la esencia de vainilla, bate hasta integrar por completo. 2.En una sartén caliente, funde un poco de mantequilla, humedece una rebanada de pan con la mezcla anterior y cocina por ambos lados hasta que dore ligeramente; repite con el resto de los ingredientes.3.Mezcla el yogurt con la Leche Condensada LA LECHERA®, la cocoa y ½ cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®. Sirve una rebanada de pan, agrega un poco de la preparación de yogurt, añade otra rebanada de pan un poco más de yogurt, decora con un poco más de cocoa y repite el procedimiento con el resto de los ingredientes. Decora con los frutos rojos y la menta; ofrece.',
    ingredients: ["3/4 Taza de Leche Evaporada CARNATION® CLAVEL®",
      "1 Cucharada de cocoa, en polvo",
      "1 Cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®",
      "1 Huevo",
      "1 Cucharada de esencia de vainilla",
      "1/2 Barra de mantequilla (45 g)",
      "8 Rebanadas de pan de caja",
      "2 Tazas de yogurt griego, natural",
      "1/4 Taza de Leche Condensada LA LECHERA®",
      "1 Cucharada de cocoa, en polvo",
      "2 Tazas de frutos rojos",
      "8 Hojas de menta, desinfectada"],
    description: 'Aprende una nueva versión de tu clásico PAN FRANCES, ahora con un toque de café y chocolate para volverlos sabor TIRAMISÚ'
  },
  {
    id: 1,
    name: 'Hot Cakes de Avena y Manzanas',
    description: 'Empieza el día con unos HOT CAKES de AVENA con MANZANA y un toque de canela. Ideal para toda la familia.',
    image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/cd221aa6b85a8822adaa0a0363dd420b.webp?itok=IRDowxe3',
    recipe: 'Prepara tu bebida 1.Mezcla en un vaso el Producto Combinado Lácteo NESTLÉ® NUTRI RINDES® con el agua y reserva. Prepara los hot cakes 2.Licúa la avena con los huevos, los plátanos, el agua y la canela. Rocía un poco de aceite en aerosol en una sartén caliente, vierte la mezcla con los cubos de manzana encima y asa los hot cakes por ambos lados. ¡Listo el desayuno! 3.Decora con un poco más de manzana y una hoja de menta, acompaña con el Producto Combinado Lácteo NESTLÉ® NUTRI RINDES®.',
    ingredients: [
      "3 Cucharadas de Producto Lácteo Combinado NESTLÉ® NUTRI RINDES®",
      "200 Mililitros de agua",
      "2 Tazas de avena molida",
      "2 Huevos",
      "2 Plátanos maduros",
      "1/2 Taza de agua",
      "1 Cucharadita de canela molida",
      "10 Gramos Aceite en aerosol",
      "1 Manzana",
      "Hojas de menta desinfectadas"
    ]
  },
  {
    id: 2,
    name: 'Atole de Chocolate con Nuez',
    image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/92e54080ecbbe8bcdfdd1f1a447b1c87.webp?itok=OErSCyEJ', // Imagen de ejemplo, verifica en la fuente
    recipe: 'Licúa la fécula de maíz con los ingredientes. Cocina la mezcla a fuego medio por 10 minutos, moviendo constantemente. Sirve caliente.',
    ingredients: [
      "3 Cucharadas de fécula de maíz",
      "3/4 Taza de Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA PRESIDENCIAL®",
      "1 Raja de canela",
      "1 Taza de nuez tostada",
      "4 Tazas de agua",
      "1 Lata de Leche Evaporada CARNATION® CLAVEL®"
    ],
    description: 'Un delicioso atole de chocolate con nuez, perfecto para cualquier ocasión.'
  }
];

  get getRecipes() {return this.recipes};

  getRecipe(id:number) {return this.recipes[id]}

}
