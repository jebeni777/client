export default function foodsByGroupReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOODS_BY_GROUP":
            return [...action.foods];
        default:
            return state;
    }
}