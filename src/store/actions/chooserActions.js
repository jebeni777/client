const LOAD_CHOOSER = "LOAD_CHOOSER";

export function loadAilments(ailments) {
    return { type: LOAD_CHOOSER, ailments };
}