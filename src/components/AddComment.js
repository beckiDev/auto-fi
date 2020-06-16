import React, { useState}  from 'react'
import { useDispatch } from 'react-redux'
import { pushComment } from '../actions'

function AddComment(props) {

    const {id} = props.post
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        body: "",
        postId: id
    })
    const dispatch = useDispatch()
    const handleCHange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:  e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(pushComment(form))
        setForm({name: "",
            email: "",
            body: "",
            postId: id})   
        props.onClick()
    }
    
    return (
        <div>
           <form className="add-comments">
               <input onChange={handleCHange} name="email" placeholder="email" type="email"/>
               <input onChange={handleCHange} name="name" placeholder="name" type="text"/>
               <textarea onChange={handleCHange}  name="body" className="comment"></textarea>
               <button onClick={handleSubmit}>Submit</button>
           </form> 
        </div>
    )
}

export default AddComment
