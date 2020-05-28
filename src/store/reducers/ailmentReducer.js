export default function ailmentReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_AILMENTS":
            return [...action.ailments];
        default:
            return state;
    }
}