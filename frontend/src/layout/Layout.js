import React, { useState } from 'react';
import { Notification } from 'react-admin';
import { Container, Box, useMediaQuery, ThemeProvider, makeStyles, Typography } from '@material-ui/core';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/bandeau.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom center'
  },
  userMenu: {
    float: 'right',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.grey["200"],
    '& button': {
      padding: '6px 12px'
    }
  },
  title: {
    position: 'absolute',
    top: 180,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      top: 70,
      left: 15,
      right: 50,
      fontSize: 22,
      zIndex: 10
    }
  },
  footerLink: {
    color: theme.palette.grey["500"],
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const menuItems = {
  '/': 'Le manifeste',
  '/Person': 'Annuaire',
  '/Place': 'Lieux',
  '/Event': 'Calendrier'
};

const Layout = ({ appBar, logout, theme, children }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {!xs && (
        <Box width={1} height="90px" className={classes.hero} />
      )}
      {React.cloneElement(appBar, { logout, menuItems, setSidebarOpen })}
      <Container maxWidth="lg" disableGutters={xs}>
        <Typography variant="h4" color="primary" className={classes.title} id="react-admin-title" component="h1" />
        <Box mb={{ xs: 0, sm: 2 }}>{children}</Box>
        <Box mb={{ xs: 0, sm: 3 }}>
          <Typography variant="subtitle2" color="textSecondary" align="right">
            <a href="https://semapps.org" target="_blank" rel="noopener noreferrer" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</a>
          </Typography>
        </Box>
      </Container>
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  appBar: <AppBar />
};

export default Layout;
