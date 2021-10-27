import React from 'react';
import HttpRequestGet from './HttpRequestGet/HttpRequestGet';
import NextLink from 'next/link';
import { Link } from '@mui/material';
function NavData(props) {
  let { data, isLoaded } = HttpRequestGet(
    `http://127.0.0.1:8000/api/category/`
  );

  return (
    <div>
      <ul className="categorylist">
        {data.map((item) => (
          <li className="categoryitems">
            <NextLink href={`/category/${item.id}`} passHref>
              <Link>{item.title}</Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavData;
