import React from 'react'

const CommentsList=({comments})=>{
  return (
    <>
    <h3>Comments:</h3>
    {comments.map(comment => (
        <div className='comment' key={comment.postBy + ': '+comment.text}>
            <h4>{comment.postBy}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
  )
}

export default CommentsList;
