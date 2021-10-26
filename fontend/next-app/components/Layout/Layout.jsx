import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import useStyle from '../../utills/style';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';

function Layout({ children, props }) {
  const classes = useStyle();

  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <div>
      <Head>
        <title> Ecommerce App</title>
      </Head>

      <AppBar position="static" className={classes.navbar} position="fixed">
        <div className="navbarmain">
          <div className="menu-icons" onClick={handleClick}>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon className={classes.barIcon}></MenuIcon>
            </IconButton>
          </div>

          <div>
            <Typography
              className={classes.brand}
              display={{ xs: 'none', sm: 'block' }}
            >
              River Fish
            </Typography>
          </div>

          <div className="searchbox">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="search your items" />
          </div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>
                <ShoppingCartIcon />
              </Link>
            </NextLink>

            <NextLink href="/cart" passHref>
              <Link>
                <PersonIcon />
              </Link>
            </NextLink>
          </div>
        </div>
      </AppBar>

      <div className={click ? 'sidebar show' : 'sidebar'}>
        <ul>
          <li>Small Fish</li>
        </ul>
      </div>

      <div className="main">
        <div>{children}</div>
      </div>

      <footer className={classes.footer}>
        <Typography>All right reserver, River Fish</Typography>
      </footer>
    </div>
  );
}

export default Layout;
