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
function Layout({ children, props }) {
  const classes = useStyle();

  return (
    <div>
      <Head>
        <title> Ecommerce App</title>
      </Head>

      <AppBar position="static" className={classes.navbar} position="fixed">
        <div className="navbarmain">
          <div className="menu-icons">
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <div>River Fish</div>

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

      <div className="main">
        <Container>{children}</Container>
      </div>

      <footer className={classes.footer}>
        <Typography>All right reserver, River Fish</Typography>
      </footer>
    </div>
  );
}

export default Layout;
