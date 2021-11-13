import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieReviewsCarousel } from '../MovieReview/MovieReviewsCarousel';
import { MovieReviewForm } from '../MovieReview/MovieReviewForm';
import { CardMedia, Dialog, DialogContent } from '@mui/material';

export const MovieModal = ({open, handleClose, movie}) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    try {        
        axios.get("http://localhost:8000/rating/").then(res => res.data)
          .then(reviews => {
            setReviews(reviews.filter(r => r.Movie === movie.Id));
          })      
    } catch (error) {
        console.log(error);
    }
  }, [movie.Id])


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="movie-title"
      aria-describedby="movie-plot"
      scroll="body"
      fullWidth={open}
      maxWidth= "lg"
    >
      <DialogContent>
        <Typography id="movie-title" variant="h6" component="h2">
          {movie.Title}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: 5 }}>
          <Typography id="movie-plot" sx={{ mt: 2}}>
            {movie.Plot}
          </Typography>
          <Box sx={{ justifyItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image={movie.Poster}
              alt="Movie Poster"
              sx={{objectFit: "contain"}}
            />
          </Box>
        </Box>
        <Box m={5}>
          <MovieReviewsCarousel reviews={reviews}/>
        </Box>
        <MovieReviewForm movie={movie}/>
      </DialogContent>
    </Dialog>
  );
}