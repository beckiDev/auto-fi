import React from 'react'

const Comment = (props) => {
    const { comments } = props
    return (
        <div>
          {
              
              comments.map(comment => (
                  <>
                <h4>{comment.title}</h4>
                <div>{comment.email}</div>
                </>
             ))

          }
        </div>
    )
}
export default Comment