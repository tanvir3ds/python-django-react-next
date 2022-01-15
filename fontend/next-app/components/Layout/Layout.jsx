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
import NavData from '../NavData';
import axios from 'axios';

function Layout({ children, props }) {
  const classes = useStyle();

  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);
  const RemoveHandleClick = () => setclick(!true);

  //Token
  const [tokenget, settoken] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  // useEffect(() => {
  //   settoken(localStorage.getItem('token'));
  // }, []);
  // console.log(tokenget);

  // useEffect(() => {
  //   settoken(localStorage.getItem('token'));
  //   if (tokenget !== null) {
  //     const getdata = async () => {
  //       await axios({
  //         method: 'get',
  //         url: `http://127.0.0.1:8000/api/profile/`,
  //         headers: {
  //           Authorization: `token ${tokenget}`,
  //         },
  //       }).then((response) => {
  //         console.log(response, 'profile data');
  //         setIsLoaded(false);
  //       });
  //     };
  //     getdata();
  //   }
  // }, []);

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
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  className={classes.brand}
                  display={{ xs: 'none', sm: 'block' }}
                >
                  NEXT SHOP
                </Typography>
              </Link>
            </NextLink>
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

            <NextLink href="/login" passHref>
              <Link>
                <PersonIcon />
              </Link>
            </NextLink>
          </div>
          <div>
            <Typography display={{ xs: 'none', sm: 'block' }}>Login</Typography>
          </div>
        </div>
      </AppBar>

      <div
        className={click ? 'sidebar show' : 'sidebar'}
        onClick={RemoveHandleClick}
      >
        <NavData></NavData>
      </div>

      <div className="main" onClick={RemoveHandleClick}>
        <div>{children}</div>
      </div>

      <footer className={classes.footer}>
        <Typography>All right reserver, River Fish</Typography>
      </footer>
    </div>
  );
}

export default Layout;
