export default function chooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_CHOOSER":
            console.log("action object", action)
            return [...action.ailments];
        default:
            return state;
    }
}