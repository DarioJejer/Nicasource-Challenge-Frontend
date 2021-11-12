import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MovieReviewsCarousel } from './MovieReviewsCarousel';
import { CardMedia, Dialog, DialogContent, Grid } from '@mui/material';
import { maxWidth } from '@mui/system';

export const MovieModal = ({open, handleClose}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="movie-title"
      aria-describedby="movie-plot"
      scroll="body"
      fullWidth= "true"
      maxWidth= "80%"
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
          <Box sx={{ alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="./Joker-Poster.jpg"
              alt="Movie Poster"
            />
          </Box>
        </Box>
        <Box m={5}>
          <MovieReviewsCarousel/>
        </Box>
      </DialogContent>
    </Dialog>
  );
}