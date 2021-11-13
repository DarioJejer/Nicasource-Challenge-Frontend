import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export const MovieReview = ({review}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    try {        
        axios.get("http://localhost:8000/user/").then(res => res.data)
          .then(users => {
            setUser(users.find(u => u.Id === review.User));
          })      
    } catch (error) {
        console.log(error);
    }
  }, [review.User])

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader                
        title={user.Username}
        subheader={review.Date}
      />      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {review.Comment}
        </Typography>       
        <Rating name="read-only" value={review.Rating} readOnly sx={{margin: 2}}/>
      </CardContent>      
    </Card>
  );
}