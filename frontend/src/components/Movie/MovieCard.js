import * as React from 'react';
import "./MovieCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MovieModal } from "./MovieModal";

export const MovieCard = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 300, margin: 2}}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="300"
          image="https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png"
          alt="Movie Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <MovieModal open={open} handleClose={handleClose}/>
    </Card>
  );
};