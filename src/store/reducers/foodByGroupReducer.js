export default function foodsByGroupReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOODS_BY_GROUP":
            console.log("action object", action)
            return [...action.foods];
        default:
            return state;
    }
}