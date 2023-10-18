

const Post = (props) => {
    return ( 
        <div>
            <header>{props.name}</header>
            <p>{props.comment}</p>
            <button>Likes</button>
            <button>Dislikes</button>
        </div>
     );
}
 
export default Post;