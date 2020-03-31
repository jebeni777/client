export default function ailmentReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_AILMENTS":
            console.log("action object", action)
            return [...action.ailments];
        default:
            return state;
    }
}