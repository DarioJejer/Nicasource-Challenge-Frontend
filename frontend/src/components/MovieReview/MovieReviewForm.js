import * as React from 'react';
import "./MovieReviewForm.css"
import TextField from '@mui/material/TextField';
import { Card, CardActions, CardContent, CardHeader, FormControl, FormHelperText, Rating } from '@mui/material';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const MovieReviewForm = () => {

  const [commentValue, setCommentValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(0);
  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit!");
  }

  return (
    <Card sx={{width: "50%"}} >
        <CardHeader 
            title="Leave your review"
        />
        <CardActions>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="comment-input"
                    label="Comment"
                    multiline
                    maxRows={4}
                    value={commentValue}
                    onChange={handleCommentChange}
                    variant="outlined"
                    fullWidth
                    />
                <Rating 
                    name="read-only" 
                    value={ratingValue}  
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                    sx={{margin: 2}}
                />
                
                <button type="submit" className="review-button">
                    Send
                </button>
            </form>
        </CardActions>
    </Card>
  );
}