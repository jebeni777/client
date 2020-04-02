export default function nutriChooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_NUTRIENT_CHOOSER":
            console.log("action object", action)
            return [...action.nutrients];
        default:
            return state;
    }
}