const LOAD_INGREDIENTS = "LOAD_INGREDIENTS";

export function loadIngredients(ingredients) {
    return { type: LOAD_INGREDIENTS, ingredients };
}