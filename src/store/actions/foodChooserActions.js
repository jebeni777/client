import { LOAD_FOOD_CHOOSER } from "./actionTypes";

export function loadFoodChooser(foodChooser) {
    return { type: LOAD_FOOD_CHOOSER, foodChooser };
}