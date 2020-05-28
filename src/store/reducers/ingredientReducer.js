export default function ingredientReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_INGREDIENTS":
            return [...action.ingredients];
        default:
            return state;
    }
}