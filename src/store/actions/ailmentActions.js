const LOAD_AILMENTS = "LOAD_AILMENTS";

export function loadAilments(ailments) {
    return { type: LOAD_AILMENTS, ailments };
}