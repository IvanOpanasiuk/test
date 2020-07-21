import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import { muzAlbumsMiddleware } from "./middlewares";

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(muzAlbumsMiddleware),
            process.env.NODE_ENV === "development" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ),

    );

    return store;
}

export default createAppStore;