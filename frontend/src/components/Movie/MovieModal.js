import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MovieReviewsCarousel } from './MovieReviewsCarousel';

const style = {
  position: 'absolute',
  top: '100px',
  left: '50%',
  transform: 'translate(-50%, 0 )',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const MovieModal = ({open, handleClose}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="movie-title"
        aria-describedby="movie-plot"
      >
        <Box sx={style}>
          <Typography id="movie-title" variant="h6" component="h2">
            Title of the movie
          </Typography>
          <Typography id="movie-plot" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            
            Tristique et egestas quis ipsum. Ut aliquam purus sit amet luctus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. 
            Vel risus commodo viverra maecenas accumsan lacus. Ultricies mi quis hendrerit dolor magna eget est. 
            Enim nulla aliquet porttitor lacus. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
            Nibh tortor id aliquet lectus proin. Suspendisse in est ante in nibh. Congue nisi vitae suscipit tellus mauris a. 

            Est lorem ipsum dolor sit. Nunc sed velit dignissim sodales. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. 
            Massa tempor nec feugiat nisl pretium fusce id. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
            Praesent tristique magna sit amet purus gravida quis blandit turpis. Morbi quis commodo odio aenean sed adipiscing diam donec.
          </Typography>
          <Box m={5}>
            <MovieReviewsCarousel/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}