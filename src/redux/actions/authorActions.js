import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusAction"

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return authorApi
            .getAuthors()
            .then(author => {
                dispatch(loadAuthorsSuccess(author));
            })
            .catch(error => {
                throw error;
            });
    };
}