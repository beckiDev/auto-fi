import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostComments } from '../actions'
import './Post.css'

 const Post = props => {
    const { post } = props 
    let { comments } = useSelector(state => state.comments)
    const dispatch = useDispatch()
    useMemo(() => {
        return dispatch(fetchPostComments(post.id))
    }, [dispatch, post.id]);
    const handleExtend = () => {
      console.log(post.id);
      
    }
    return (
        <div className="SmallPostConteiner" onClick="handleExtend">
           <h3>{post.title.toUpperCase()}</h3> 
           <p>{post.body}</p>
           <span>
            {comments 
               ?
               <i className="fa fa-comments float-right" aria-hidden="true">
                {comments.length}
              </i>
              :
              <i className="fa fa-comments float-right" aria-hidden="true">
                {` No comments yet...`}
              </i>
            }     
           </span>
        </div>
    )
}
export default Post