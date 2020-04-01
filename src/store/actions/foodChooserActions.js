const LOAD_FOOD_CHOOSER = "LOAD_FOOD_CHOOSER";

export function loadFoodChooser(foodChooser) {
    return { type: LOAD_FOOD_CHOOSER, foodChooser };
}