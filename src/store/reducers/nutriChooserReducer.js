export default function nutriChooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_NUTRIENTS_CHOOSER":
            console.log("action object", action)
            // debugger
            return [...action.nutrients];
        default:
            return state;
    }
}