export default function foodReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOODS":
            return [...action.foods];
        default:
            return state;
    }
}