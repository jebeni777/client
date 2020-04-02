const LOAD_NUTRIENTS = "LOAD_NUTRIENTS";

export function loadNutrients(nutrients) {
    return { type: LOAD_NUTRIENTS, nutrients };
}