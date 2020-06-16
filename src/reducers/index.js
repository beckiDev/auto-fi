import {  
    FETCH_POSTS_BEGIN, 
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR, 
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    PUSH_COMMENTS
 } from '../actions';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const posts = ( state = {posts: [], loading: false, error: null}, action ) => { 
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload.error
            }
        default:
            return state
    }
};

const comments = ( state = {loading: false, comments: [], error: null}, action ) => { 
    switch (action.type) {
        case FETCH_COMMENTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload.comments
            }
        case FETCH_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                comments: action.payload.error
            }
        default:
            return state
    }
};

const userComments = (state = { userComments: [] }, action) => {
    switch (action.type) {
        case PUSH_COMMENTS:
            return {
                ...state,
                userComments: action.payload
                
            }
        default:
            return state;
    }
}
export default (history) => combineReducers({
    router: connectRouter(history),
    posts,
    comments,
    userComments
  })