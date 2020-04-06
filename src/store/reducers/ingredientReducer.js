export default function ingredientReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_INGREDIENTS":
            console.log("action object", action)
            return [...action.ingredients];
        default:
            return state;
    }
}