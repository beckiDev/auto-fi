export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

export const FETCH_POSTS_BEGIN = 'FETCH_POST_BEGIN'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POST_ERROR'

export const PUSH_COMMENTS = 'PUSH_COMMENTS'

export function fetchPosts(){
  return dispatch => {
    dispatch(fetchPostsBegin())
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPostsSuccess(json))
        return json.posts
      })
      .catch(err => dispatch(fetchpostFailure(err)))
  }
}

export function fetchComments(){
  return dispatch => {
    dispatch(fetchCommentsBegin())
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCommentsSuccess(data))
        return data
      })
      .catch(err => dispatch(fetchCommentsFailure(err)))
  }
}


function handleErrors(res){
  if(!res.ok){
    throw Error(res.statusText)
  }
  return res
}

export const fetchPostsBegin = () =>({
  type: FETCH_POSTS_BEGIN
})
  
export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
})

export const fetchpostFailure = error => ({
  type: FETCH_POSTS_ERROR,
  payload: { error }
})

export const fetchCommentsBegin = () =>({
  type: FETCH_COMMENTS_BEGIN
})
  
export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments }
})

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_ERROR,
  payload: { error }
})

let commentId = 6;
export const pushComment = comment => ({
  type: PUSH_COMMENTS,
  payload: [{
    id: commentId++,
    postId: comment.postId,
    body: comment.body,
    email: comment.email,
    name: comment.name
  }]
})