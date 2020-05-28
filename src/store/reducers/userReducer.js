export default function userReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_USER":
            return [...action.ailments];
        default:
            return state;
    }
}