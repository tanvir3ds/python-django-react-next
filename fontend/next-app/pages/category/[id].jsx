import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import HttpRequestGet from '../../components/HttpRequestGet/HttpRequestGet';
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
        <h2>{id}</h2>

        {data.map((item) => (
          <div>
            {/* <h1>{item.title}</h1> */}
            {/* <h1>{item.category_product[1].title}</h1> */}

            <div className="row">
              {item !== null &&
                item?.category_product.map((product, i) => (
                  <div className="col-md-3">
                    <h2>{product.title}</h2>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default CategoryProduct;
