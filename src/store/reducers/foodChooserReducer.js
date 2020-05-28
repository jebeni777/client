import { LOAD_FOOD_CHOOSER } from "../actions/actionTypes";

export default function foodChooserReducer(state = [], action) {
    switch (action.type) {
        case LOAD_FOOD_CHOOSER:
            return [...action.foodChooser];
        default:
            return state;
    }
}