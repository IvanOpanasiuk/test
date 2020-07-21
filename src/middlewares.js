import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } from './actionCreators/albums';

export const muzAlbumsMiddleware = store => next => action => {
    if (action.type === getAlbumsRequest.toString()) {
        fetch('https://api.tvmaze.com/shows/180/episodes', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                store.dispatch(getAlbumsSuccess(data));
            })
            .catch(error => {
                store.dispatch(getAlbumsFailure(error));
            })
    }
    next(action);
}