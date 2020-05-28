export default function userReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_USER":
            console.log("action object", action)
            return [...action.ailments];
        default:
            return state;
    }
}