import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
  AppBar as MuiAppBar,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    padding: 10,
    height: 65,
    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
  logo: {
    width: 48,
    height: 48,
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      width: 32,
      height: 32,
    },
  },
  logoArea: {
    padding: 12,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  logoText: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.common.white,
    // verticalAlign: 'middle',
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  openButton: {
    padding: 5,
    float: "right",
  },
  menuLink: {
    textDecoration: "none",
  },
  menuText: {
    fontFamily: "Helvetica",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 1,
    color: theme.palette.common.white,
  },
  subMenu: {
    cursor: "pointer",
  },
}));

const InternalMenuLink = ({ text, link, classes }) => (
  <Grid item sm={2} key={text}>
    <Box display="flex" height={48} alignItems="center" justifyContent="center">
      <Link to={link} className={classes.menuLink}>
        <Typography className={classes.menuText}>
          {text.split("\n").map((item, key) => (
            <React.Fragment key={key}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </Link>
    </Box>
  </Grid>
);

const ExternalMenuLink = ({ text, link, classes }) => (
  <Grid item sm={2} key={text}>
    <Box display="flex" height={48} alignItems="center" justifyContent="center">
      <a href={link} target="_blank" className={classes.menuLink}>
        <Typography className={classes.menuText}>
          {text.split("\n").map((item, key) => (
            <React.Fragment key={key}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </a>
    </Box>
  </Grid>
);

const MenuSubLinks = ({ children, handleMenuClose, classes }) => {
  return children.map(({ text, internal, link }) => (
    <MenuItem onClick={handleMenuClose}>
      {internal ? (
        <Link to={link} className={classes.menuLink}>
          <Typography>
            {text.split("\n").map((item, key) => (
              <React.Fragment key={key}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </Link>
      ) : (
        <a href={link} target="_blank" className={classes.menuLink}>
          <Typography>
            {text.split("\n").map((item, key) => (
              <React.Fragment key={key}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </a>
      )}
    </MenuItem>
  ));
};

const AppBar = ({ menuItems, setSidebarOpen }) => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const [anchorMenuEl, setMenuAnchorEl] = React.useState(null);
  const open = Boolean(anchorMenuEl);
  const handleMenuClick = (event) => {
    console.log(event.currentTarget);
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="lg" className={classes.header}>
        <Grid container>
          <Grid item sm={4} xs={10} className={classes.logoArea}>
            <Link to="/" className={classes.menuLink}>
              {/*<img src={process.env.PUBLIC_URL + '/colibris-blanc.png'} alt="Colibris" className={classes.logo} />*/}
              <span className={classes.logoText}>Classe Dehors</span>
            </Link>
          </Grid>
          <Grid item sm={8} xs={2} align="right">
            {xs ? (
              <IconButton
                color="inherit"
                onClick={() => setSidebarOpen(true)}
                className={classes.openButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Grid container>
                {menuItems.map(({ text, internal, link, children }) => {
                  if (link) {
                    if (internal) {
                      return <InternalMenuLink {...{ text, link, classes }} />;
                    } else {
                      return <ExternalMenuLink {...{ text, link, classes }} />;
                    }
                  } else {
                    return (
                      <>
                        <Grid item sm={2} key={text}>
                          <Box
                            display="flex"
                            height={48}
                            alignItems="center"
                            justifyContent="center"
                            className={classes.subMenu}
                            onClick={handleMenuClick}
                          >
                            <Typography className={classes.menuText}>
                              {text.split("\n").map((item, key) => (
                                <React.Fragment key={key}>
                                  {item}
                                  <br />
                                </React.Fragment>
                              ))}
                            </Typography>
                          </Box>
                        </Grid>
                        <Menu
                          anchorEl={anchorMenuEl}
                          open={open}
                          onClose={handleMenuClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuSubLinks
                            {...{ children, handleMenuClose, classes }}
                          />
                        </Menu>
                      </>
                    );
                  }
                })}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
