import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import HttpRequestGet from '../../components/HttpRequestGet/HttpRequestGet';
import {
  Grid,
  List,
  ListItem,
  Typography,
  Link,
  Card,
  Button,
} from '@mui/material';

function SingleProductByID(props) {
  const router = useRouter();
  const { id } = router.query;

  let { data, isLoaded } = HttpRequestGet(
    `http://127.0.0.1:8000/api/product/${id}/`
  );

  console.log(data);

  return (
    <div>
      <Layout>
        <Grid container className="product-container">
          <Grid item md={6} xs={12}>
            <Grid item md={12} xs={12}>
              <img
                src={data.image}
                alt={data.alt_text}
                className="single-product-image"
              />
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="h1">{data.title}</Typography>
              </ListItem>

              <ListItem>
                <Typography component="h1">
                  {' '}
                  Description: {data.short_description}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="h1">{data.long_description}</Typography>
              </ListItem>

              <ListItem>
                <Typography component="h1"> Weight: {data.weight}</Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid item md={3} xs={12}>
            <Card className="single-card">
              <list>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${data.price}</Typography>
                      <Typography>ID{data.id}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Text</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Text 2</Typography>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Button fullWidth variant="contained" color="secondary">
                    Add to Cookie
                  </Button>
                </ListItem>
              </list>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default SingleProductByID;
