import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from '../components/Post.js'


const Posts = () => {
    let { posts } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchPosts()) 
    //   }, [dispatch]);
      useMemo(() => {
        return dispatch(fetchPosts())
    }, [dispatch]);
    return (
        <div style={{paddingTop:"50px"}}>
           { posts.length === 0 ?
               <div>Loading...</div>
              :
               posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    )
}
export default Posts
