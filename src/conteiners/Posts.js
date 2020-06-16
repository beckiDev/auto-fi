import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, fetchComments } from '../actions'
import { getComments } from '../utils'
import Post from '../components/Post.js'

const Posts = () => {
    const dispatch = useDispatch()
    let { posts } = useSelector(state => {        
       return state.posts
    })
    let { comments } = useSelector(state => state.comments)

   
    useMemo(() => {
        dispatch(fetchPosts())
        dispatch(fetchComments())    
    },[dispatch]);
    
    return ( 
        <div style={{paddingTop:"50px"}} className="t">
          { posts.length === 0 ?
                <div>Loading...</div>
            :
                posts.map(post => {                
                    return <Post key={post.id} post={post} comments={getComments(post.id, comments)}/>
                })
            }
        </div>
    )
}
export default Posts