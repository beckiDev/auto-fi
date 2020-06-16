import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchComments } from '../actions'

const Comment = (props) => {
    const { postId } = props
    const dispatch = useDispatch()
    let { comments } = useSelector(state => state.comments)

    useMemo(() => {
      return dispatch(fetchComments())
    }, [dispatch, postId]);

    console.log('comments', comments);
    
    return (
        <div className="CommentsPostConteiner" >
           <h4>Comments</h4>
           { comments 
           ?
            comments.map(item =>{
             return <div>
                 <p><i class="fa fa-envelope" aria-hidden="true">{` ${item.email}: ${item.name}`}</i></p>
                 <p>{item.body}</p>
            </div>
            })
            
            : 
            <div>Loading...</div>
           }
        </div>
    )
}
export default Comment