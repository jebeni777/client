export default function reportReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_REPORT":
            return [...action.ailments];
        default:
            return state;
    }
}