
export function fetchData(name){
    if(name === 'posts'){
        return getPosts()
    } else if(name === 'comments'){
        return getPostComments()
    } else return
}

function getPosts() {
    const url =`https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then((res) => res.json())
        .then((data) => data);
}

function getPostComments(postId) {
    const posts = []
    const url =`https://jsonplaceholder.typicode.com/comments`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.array.forEach(element => {
                if(element.postId === postId){
                    posts.push(element)
                }
            });
        });
}


  
