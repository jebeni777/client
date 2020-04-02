const LOAD_NUTRIENT_CHOOSER = "LOAD_NUTRIENT_CHOOSER";

export function loadNutriChooser(nutrients) {
    return { type: LOAD_NUTRIENT_CHOOSER, nutrients };
}