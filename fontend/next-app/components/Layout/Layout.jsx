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

function Layout({ children, props }) {
  const classes = useStyle();

  return (
    <div>
      <Head>
        <title> Ecommerce App</title>
      </Head>

      <AppBar position="static" className={classes.navbar} position="fixed">
        <Toolbar>
          <Typography>Shop</Typography>
        </Toolbar>
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
