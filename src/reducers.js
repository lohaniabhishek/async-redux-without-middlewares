import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL,

    GET_POSTS_BULK_REQUEST,
    GET_POSTS_BULK_SUCCESS,
    GET_POSTS_BULK_FAIL

} from "./constants";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS_BY_ID_REQUEST:
            return {
                ...state,
                byId: {
                    isLoading: true,
                    isCompleted: false,
                    error: null,
                    data: null
                }
            }
        case GET_POSTS_BY_ID_SUCCESS:
            return {
                ...state,
                byId: {
                    isLoading: false,
                    isCompleted: true,
                    error: false,
                    data: action.payload
                }
            }
        case GET_POSTS_BY_ID_FAIL:
            return {
                ...state,
                byId: {
                    isLoading: false,
                    isCompleted: true,
                    error: action.payload,
                    data: false
                }
            }

            case GET_POSTS_BULK_REQUEST:
            return {
                ...state,
                byBulk: {
                    isLoading: true,
                    isCompleted: false,
                    error: null,
                    data: null
                }
            }
        case GET_POSTS_BULK_SUCCESS:
            return {
                ...state,
                byBulk: {
                    isLoading: false,
                    isCompleted: true,
                    error: false,
                    data: action.payload
                }
            }
        case GET_POSTS_BULK_FAIL:
            return {
                ...state,
                byBulk: {
                    isLoading: false,
                    isCompleted: true,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;
    }
}

export default reducer;