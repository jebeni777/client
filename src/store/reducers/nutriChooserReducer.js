export default function nutriChooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_NUTRIENTS_CHOOSER":
            return [...action.nutrients];
        default:
            return state;
    }
}