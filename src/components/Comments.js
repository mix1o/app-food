import React from "react"

const Comments = ({email,body}) => {
    return (
        <div className="comment">
            <p className="c-email">{email}</p>
            <p className="c-body">{body}</p>
        </div>
    )
}

export default Comments