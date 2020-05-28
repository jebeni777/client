import { LOAD_REPORT } from "./actionTypes";

export function loadReport(ailments) {
    return { type: LOAD_REPORT, ailments };
}
