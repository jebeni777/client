export default function foodChooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FOOD_CHOOSER":
            console.log("action object", action)
            return [...action.foodChooser];
        default:
            return state;
    }
}