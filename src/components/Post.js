import React, { useState, } from 'react'
import { useSelector } from 'react-redux'
import AddComment from './AddComment'
import { capitalize } from '../utils'
import './Post.css'

 const Post = props => {  
 
   const [ commentsOpen, setCommentsOpen ] = useState(false) 
   const { post, comments } = props 
   const [ addCommentOpen, setAddCommentOpen ] = useState(false)
   let { userComments } = useSelector(state => state.userComments)
   
    const handleOpen = (item) => {
      switch (item) {
        case 'comment':
          if(commentsOpen === true ){
            setCommentsOpen(false)
          } else {
            setCommentsOpen(true)
          }
          break;
        case 'addComment':
          if(addCommentOpen === true ){
            setAddCommentOpen(false)
          } else {
            setAddCommentOpen(true)
          }
          break;
        default:
          break;
      }   
    }
    const handleUserComments = ()=>{
      setCommentsOpen(true)
      setAddCommentOpen(false)
      console.log(userComments);
      
    }

    return (
      
        <div className="SmallPostConteiner" >
           <h3>{capitalize(post.title)}</h3> 
           <p>{capitalize(post.body)}</p>
           <span>
            {comments 
               ?
               <>
                <i className="fa fa-plus" onClick={() => handleOpen('addComment')}>Add Comment</i>
                <i className="fa fa-comments float-right" onClick={() => handleOpen('comment')} aria-hidden="true">
                  {comments.length}
                </i>
              </>
              :
              <i className="fa fa-comments float-right" aria-hidden="true">
                {` No comments yet...`}
              </i>
            }     
           </span>
           { addCommentOpen &&
            <AddComment post={post} onClick={handleUserComments} />
           }

          
           { commentsOpen && 
               <div className="CommentsPostConteiner" >
               <h4>Comments</h4>
               { userComments &&
                  userComments.map(item =>{
                    return <div key={item.id}>
                        <p><i className="fa fa-envelope" aria-hidden="true">{` ${item.email}: ${item.name}`}</i></p>
                        <p>{item.body}</p>
                   </div>
                   })
               }
               { comments 
               ?
                comments.map(item =>{
                 return <div key={item.id}>
                     <p><i className="fa fa-envelope" aria-hidden="true">{` ${item.email}: ${item.name}`}</i></p>
                     <p>{item.body}</p>
                </div>
                })
                
                : 
                <div>Loading...</div>
               }
            </div>
           }
          
        </div>
    )
}
export default Post