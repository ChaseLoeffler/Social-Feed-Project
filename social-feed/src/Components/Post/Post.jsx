

const Post = (props) => {
    return ( 
        <table>
         <thead>
            {props.parentPost.map((post) => {
                return(
                     <th>{post.name}</th>
                    );
                })}
            </thead>
            <tbody>
            {props.parentPost.map((post) => {
                return(
                     <tr>
                        <td>{post.comment}</td>
                     </tr>
                    );
                })}
            </tbody>
            <tfoot>
            {props.parentPost.map((post) => {
                return(
                     <tr>
                        <td>Posted: {post.date}</td>
                        <td>Likes/Dislikes</td>
                     </tr>
                    );
                })}
            </tfoot>
        </table>
     );
}
 
export default Post;