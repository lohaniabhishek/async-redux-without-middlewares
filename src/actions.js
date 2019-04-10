import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL,

    GET_POSTS_BULK_REQUEST,
    GET_POSTS_BULK_SUCCESS,
    GET_POSTS_BULK_FAIL

} from "./constants";

import {
    getPostsById,
    getPostsBulk
} from "./api";

const getPostById = async (dispatch, id) => {
    dispatch({ type: GET_POSTS_BY_ID_REQUEST });

    try {
        const response = await getPostsById(id);
        const res = await response.json();
        dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: e });
    }
};

const getPostBulk = async dispatch => {
    dispatch({ type: GET_POSTS_BULK_REQUEST });

    try {
        const response = await getPostsBulk();
        const res = await response.json();
        dispatch({ type: GET_POSTS_BULK_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_POSTS_BULK_FAIL, payload: e });
    }
};

export const getPostByIdFunc = dispatch => {
    return id => getPostById(dispatch, id);
}

export const getPostsBulkFunc = dispatch => {
    return () => getPostBulk(dispatch);
}

