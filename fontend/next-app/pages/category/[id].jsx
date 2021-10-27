import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import HttpRequestGet from '../../components/HttpRequestGet/HttpRequestGet';
import { Grid } from '@mui/material';
import ProductCard from '../../components/ProductCard';
function CategoryProduct(props) {
  const router = useRouter();
  const { id } = router.query;

  let { data, isLoaded } = HttpRequestGet(
    `http://127.0.0.1:8000/api/category/${id}`
  );
  console.log('cate single');
  console.log(data);

  return (
    <Layout>
      <div>
        {data.map((item) => (
          <div>
            <div className="category-image">
              <img src={`${'http://127.0.0.1:8000'}${item.image}`} />
            </div>
            {/* <h1>{item.title}</h1> */}
            {/* <h1>{item.category_product[1].title}</h1> */}

            <Grid container spacing={3} className="single-category">
              {item !== null &&
                item?.category_product.map((product, i) => (
                  <Grid item xs={6} md={3} key={product.title}>
                    <ProductCard product={product}></ProductCard>
                  </Grid>
                ))}
            </Grid>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default CategoryProduct;
