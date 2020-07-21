import { createAction } from "redux-actions";

export const getAlbumsRequest = createAction('GET_ALBUM_REQUEST');
export const getAlbumsSuccess = createAction('GET_ALBUM_SUCCESS');
export const getAlbumsFailure = createAction('GET_ALBUM_FAILURE');
export const addNewAlbum = createAction('ADD_NEW_ALBUM');
export const deleteAlbum = createAction('DELETE_ALBUM');