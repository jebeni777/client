const LOAD_FOOD_BY_GROUP = "LOAD_FOOD_BY_GROUP";

export function loadFoodByGroup(foodByGroup) {
    return { type: LOAD_FOOD_BY_GROUP, foodByGroup };
}