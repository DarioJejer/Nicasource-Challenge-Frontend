import "./MovieCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./Joker-Poster.jpg"
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    // <div class="movie-card">
    //   <div>Title</div>
    //   <img src="./Joker-Poster.jpg" alt="Joker Poster" width="200" height="300"/>
    //   <div class="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    // quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
    // </div>
  );
};