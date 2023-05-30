import React, { useState } from 'react';
import './comment.css';
import { Button, TextField} from '@mui/material';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className='container'>
        <div className="header">      <h3>Comments</h3>
</div>
<div className="section">
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
       </div>
<div className="forms">
      <form onSubmit={handleSubmit}>
         <TextField placeholder='Add Your Comments...' label="Add Your Comments..." variant="outlined" value={newComment}
            onChange={(event) => setNewComment(event.target.value)} style={{margin:'15px'}}/>

        <Button type='submit' variant="contained" style={{marginBottom:'-80px'}}>submit</Button>
      </form></div>
     
      </div>
  );
};

export default CommentSection;
