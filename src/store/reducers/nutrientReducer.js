export default function nutrientsReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_NUTRIENTS":
            console.log("action object", action)
            return [...action.nutrients];
        default:
            return state;
    }
}