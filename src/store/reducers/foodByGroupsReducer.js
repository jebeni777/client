export default function foodByGroupReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOOD_BY_GROUP":
            console.log("action object", action)
            return [...action.ingredients];
        default:
            return state;
    }
}