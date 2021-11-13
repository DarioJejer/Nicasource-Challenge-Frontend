import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieReviewsCarousel } from '../MovieReview/MovieReviewsCarousel';
import { MovieReviewForm } from '../MovieReview/MovieReviewForm';
import { CardMedia, Dialog, DialogContent } from '@mui/material';

export const MovieModal = ({open, handleClose}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="movie-title"
      aria-describedby="movie-plot"
      scroll="body"
      fullWidth= "true"
      maxWidth= "lg"
    >
      <DialogContent>
        <Typography id="movie-title" variant="h6" component="h2">
          Title of the movie
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: 5 }}>
          <Typography id="movie-plot" sx={{ mt: 2}}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            
            Tristique et egestas quis ipsum. Ut aliquam purus sit amet luctus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. 
            Vel risus commodo viverra maecenas accumsan lacus. Ultricies mi quis hendrerit dolor magna eget est. 
            Enim nulla aliquet porttitor lacus. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
            Nibh tortor id aliquet lectus proin. Suspendisse in est ante in nibh. Congue nisi vitae suscipit tellus mauris a. 

            Est lorem ipsum dolor sit. Nunc sed velit dignissim sodales. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. 
            Massa tempor nec feugiat nisl pretium fusce id. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
            Praesent tristique magna sit amet purus gravida quis blandit turpis. Morbi quis commodo odio aenean sed adipiscing diam donec.
          </Typography>
          <Box sx={{ justifyItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png"
              alt="Movie Poster"
              sx={{objectFit: "contain"}}
            />
          </Box>
        </Box>
        <Box m={5}>
          <MovieReviewsCarousel/>
        </Box>
        <MovieReviewForm/>
      </DialogContent>
    </Dialog>
  );
}