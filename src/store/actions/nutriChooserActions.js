import { LOAD_NUTRIENTS_CHOOSER } from "./actionTypes";

export function loadNutrients(nutrients) {
    return { type: LOAD_NUTRIENTS_CHOOSER, nutrients };
}