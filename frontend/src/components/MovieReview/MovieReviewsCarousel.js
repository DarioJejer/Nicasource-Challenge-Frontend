import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'
import { MovieReview } from './MovieReview';

export const MovieReviewsCarousel = () => {     
    
    const groupReviews = (reviews) => {
        const groupZise = Math.ceil(window.innerWidth * 0.6 / 450);
        const groupedReviews = [];
        reviews.forEach((review, i) => {
            if(i%groupZise === 0){
                groupedReviews.push(reviews.slice(i,i+groupZise));
            }
        })
        return groupedReviews;
    }

    const renderGroup = (reviews, i) => {
        return (
            <React.Fragment key={i}>
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap= "40px"
                >
                    {reviews.map(review => <MovieReview key={review.toString()}/>)}
                </Grid>
            </React.Fragment>
        )
        
    }

    const reviews = [1,2,3,4,5,6,7,8,9,10];
    var groupedReviews = groupReviews(reviews);

    return (
        <Carousel>
            {
                groupedReviews.map((group, i) => renderGroup(group, i))
            }
        </Carousel>
    )
}

