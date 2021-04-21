import React from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import { MenuItemLink } from "react-admin";

const useStyles = makeStyles(() => ({
  paper: {
    paddingTop: 10,
    minWidth: 200
  }
}));

const SideMenu = ({ menuItems, sidebarOpen, setSidebarOpen }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="temporary"
      open={sidebarOpen}
      classes={{ paper: classes.paper }}
      onClose={() => setSidebarOpen(false)}
    >
      {Object.keys(menuItems).map(link => (
        <MenuItemLink
          key={link}
          to={link}
          primaryText={menuItems[link]}
        />
      ))}
    </Drawer>
  );
}

export default SideMenu;
