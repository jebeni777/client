export default function nutrientsReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_NUTRIENTS":
            return [...action.nutrients];
        default:
            return state;
    }
}