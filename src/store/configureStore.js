import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;

// export default function configureStore(initialState) {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
//     return createStore(
//         rootReducer,
//         initialState
//         // composeEnhancers(applyMiddleware(logger, reduxImmutableStateInvariant()))
//     );
// }
