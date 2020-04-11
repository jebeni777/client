export default function foodReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOODS":
            console.log("action object", action)
            return [...action.ingredient];
        default:
            return state;
    }
}