export default function chooserReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_CHOOSER":
            return [...action.ailments];
        default:
            return state;
    }
}