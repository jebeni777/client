const LOAD_FOODS = "LOAD_FOODS";

export function loadFoods(foods) {
    return { type: LOAD_FOODS, foods };
}