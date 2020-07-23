import stepCounter from "./stepCounter";
import { combineReducers } from "redux";
import ailments from "./ailmentReducer";
import ingredients from "./ingredientReducer";
import nutriChooser from "./nutriChooserReducer";
import nutrients from "./nutrientReducer";
import chooser from "./chooserReducer";
import foodChooser from "./foodChooserReducer";
import foodsByGroup from "./foodsByGroupReducer";
import report from "./reportReducer";

const reducers = combineReducers({
  stepCounter,
  ailments,
  ingredients,
  nutriChooser,
  nutrients,
  chooser,
  foodChooser,
  foodsByGroup,
  report
});

export default reducers;
