import React from 'react';
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
import NextLink from 'next/link';

function ProductCard(props) {
  const { title, price, image, id } = props.product;
  return (
    <div>
      <Card>
        <CardContent>
          <NextLink href={`/product/${id}/`} passHref>
            <Link>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // image={image}
                  image={`${'http://127.0.0.1:8000'}${image}`}
                  title={title}
                ></CardMedia>
              </CardActionArea>
            </Link>
          </NextLink>

          <h5>{title}</h5>

          <h5>{price}</h5>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            // onClick={props.handleButton()}
            // onClick={() => props.handleButton(props.item)}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
