import React from 'react';
import HttpRequestGet from './HttpRequestGet/HttpRequestGet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NextLink from 'next/link';

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

function SliderImage(props) {
  let { data, isLoaded } = HttpRequestGet(
    `http://127.0.0.1:8000/api/image-slider/`
  );

  console.log(data);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {data.map((item) => (
          <Grid container className="carousel-product">
            <Grid key={item.title}>
              <Card>
                <NextLink href={`/product/${item.slug}`}>
                  <Link>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.image}
                        title={item.title}
                      ></CardMedia>
                      <CardContent>
                        <Typography variant="h10" className="carouselCardText">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderImage;
