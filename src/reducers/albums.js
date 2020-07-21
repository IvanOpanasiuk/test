import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure, addNewAlbum, deleteAlbum } from "../actionCreators/albums";

const initialState = {
    albums: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case getAlbumsRequest.toString():
            return {
                ...state,
                albums: [],
                isLoading: true
            };
        case getAlbumsSuccess.toString():
            return {
                ...state,
                albums: action.payload,
                isLoading: false
            };
        case getAlbumsFailure.toString():
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case addNewAlbum.toString():
            return {
                ...state,
                albums: [...state.albums, state.albums.push(action.payload)],
                isLoading: false
            };
        case deleteAlbum.toString():
            return {
                ...state,
                albums: state.albums.filter(album => album.id !== action.payload),
                isLoading: false
            };
        default:
            return state;
    }
}