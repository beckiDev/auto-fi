
// export const getPostComment = (posts, comments) => {
//     const map = {}
//     for(let post in posts){
//         map[posts] = []
//     }
//     for (let comment in comments){
//         if(map[postId])
//         if(!map[postID].includes(comment.id)){
//             map[postID] = 
//         }
//     }
// }
export const getComments = (postId, comments)=>{
    return comments.filter(item => item.postId === postId)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  





  
