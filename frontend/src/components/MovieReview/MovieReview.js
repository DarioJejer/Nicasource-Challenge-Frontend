import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export const MovieReview = () => {
  
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader                
        title="Name of author"
        subheader="September 14, 2016"
      />      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Dapibus ultrices in iaculis nunc sed. 
          Morbi tempus iaculis urna id volutpat. Quis commodo odio aenean sed adipiscing diam donec. Mollis aliquam ut porttitor leo a.
          Nulla pharetra diam sit amet. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat.
        </Typography>       
        <Rating name="read-only" value={2} readOnly sx={{margin: 2}}/>
      </CardContent>      
    </Card>
  );
}