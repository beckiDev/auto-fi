export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'

const getPostIdComments = (comments, id)=> {
  let com = []
  comments.forEach(comment => {
    if(comment.postId === id){
      com.push(comment)
    }
  });
  return com
}
export function fetchPosts () {
  return (dispatch) => {
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) =>  
      dispatch({ 
        type: FETCH_POSTS,
        posts: data
      }))
    }
}

export function fetchPostComments (postId) {
  return (dispatch) => {
  
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) =>  {
        let postIDComments = getPostIdComments(data, postId)
        console.log('postIDComments', postIDComments);
        return dispatch({ 
          type: FETCH_POST_COMMENTS,
          comments: postIDComments
        })
      } )
    }
}
