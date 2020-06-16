import {  FETCH_POST, FETCH_POSTS, FETCH_POST_COMMENTS } from '../actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const posts = ( state = { posts: [] }, action ) => { 
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
};

const post = ( state = { post: [] }, action ) => { 
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                post: action.post
            }
        default:
            return state
    }
};

const comments = (state = {comments: []}, action ) =>{

    switch (action.type) {
        
        case FETCH_POST_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state
    }
}

export default (history) => combineReducers({
    router: connectRouter(history),
    post,
    posts,
    comments
  })