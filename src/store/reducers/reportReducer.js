export default function reportReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_REPORT":
            console.log("action object", action)
            return [...action.ailments];
        default:
            return state;
    }
}