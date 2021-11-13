import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export const MovieReview = ({review}) => {
  
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader                
        title={"Name of author"}
        subheader="{review.Date.toDateString()}"
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