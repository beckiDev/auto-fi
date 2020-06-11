import {  FETCH_POSTS, FETCH_POST_COMMENTS } from '../actions';
import { combineReducers } from 'redux';

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


export default combineReducers({
    posts,
    comments
  });