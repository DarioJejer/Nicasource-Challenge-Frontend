import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'
import { MovieReview } from './MovieReview';

export const MovieReviewsCarousel = ({reviews}) => {     
    
    const groupReviews = () => {
        const groupZise = Math.ceil(window.innerWidth * 0.6 / 450);
        const groupedReviews = [];
        reviews.forEach((review, i) => {
            if(i%groupZise === 0){
                groupedReviews.push(reviews.slice(i,i+groupZise));
            }
        })
        return groupedReviews;
    }

    const renderGroup = (reviewsgroup, i) => {
        return (
            <React.Fragment key={i}>
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap= "40px"
                >
                    {reviewsgroup.map(review => <MovieReview key={review.Id} review={review}/>)}
                </Grid>
            </React.Fragment>
        )
        
    }

    var groupedReviews = groupReviews();

    return (
        <Carousel>
            {
                groupedReviews.map((group, i) => renderGroup(group, i))
            }
        </Carousel>
    )
}

