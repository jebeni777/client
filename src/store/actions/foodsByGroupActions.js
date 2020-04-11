const LOAD_FOODS_BY_GROUP = "LOAD_FOODS_BY_GROUP";

export function loadFoodsByGroup(foodsByGroup) {
    return { type: LOAD_FOODS_BY_GROUP, foodsByGroup };
}