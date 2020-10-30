import React, { useEffect, useState } from "react"
import { useParams,Link} from "react-router-dom";
import Comments from "./Comments";
import Header from "./page/Header";
import Title from "./Title"


const SingleReview = () => {

    const {id} = useParams();
    const [singleReview,setSingleReview] = useState([]);
    const [comments,setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setSingleReview(json))
        // .then(json => console.log(json))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(json => setComments(json))

    },[])
   

    return (
        <div className="single-review">
            <Header/>
    {/* <p>{singleReview.userId}</p> */}
            <Link className="link-review" to="/review"><i className="fas fa-arrow-left"></i>Back</Link>
            <Title title={singleReview.title} key={singleReview.id} id={singleReview.id} userId={singleReview.userId}/>
            <h3 className="heading-3">Comments</h3>
            {comments.map(({body,email,id}) => <Comments key={id} body={body} email={email}/>)}
        </div>
    )
}

export default SingleReview;

