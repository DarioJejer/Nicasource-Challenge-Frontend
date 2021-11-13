import * as React from 'react';
import "./MovieCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MovieModal } from "./MovieModal";

export const MovieCard = ({movie}) => {
  
  const {Title, Plot, Poster} = movie
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    window.location.href = "http://localhost:3000/";                    
    setOpen(false);
  } 

  return (
    <Card sx={{ maxWidth: 300, margin: 2}}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="300"
          image={Poster}
          alt="Movie Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <MovieModal open={open} handleClose={handleClose} movie={movie}/>
    </Card>
  );
};