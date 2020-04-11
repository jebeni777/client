import { LOAD_CHOOSER } from "./actionTypes";

export function loadAilments(ailments) {
    return { type: LOAD_CHOOSER, ailments };
}