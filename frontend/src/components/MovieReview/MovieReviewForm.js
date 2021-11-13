import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieReviewForm.css"
import TextField from '@mui/material/TextField';
import { Card, CardActions, CardHeader, Rating } from '@mui/material';

export const MovieReviewForm = ({movie}) => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [commentValue, setCommentValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(0);
  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };
  const handleSubmit = (e) => {
    try {
      axios.post("http://localhost:8000/rating/", {
          Comment: commentValue, 
          Rating: ratingValue, 
          Movie: movie.Id,
          User: 1
          // User: user.Id
        })          
    } catch (error) {
        alert("There was a problem, try again in a moment")               
    }
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