import React, { Fragment } from "react";
import { Drawer, Divider, ListSubheader, makeStyles } from "@material-ui/core";
import { MenuItemLink } from "react-admin";

const useStyles = makeStyles(() => ({
  paper: {
    paddingTop: 10,
    minWidth: 200,
  },
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
      {menuItems.map(({ text, internal, link, children }) => {
        if (link) {
          if (internal) {
            return (
              <Fragment key={text}>
                <Divider />
                <MenuItemLink key={link} to={link} primaryText={text} />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={text}>
                <Divider />
                <MenuItemLink
                  primaryText={text}
                  key={link}
                  to={{ pathname: link }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </Fragment>
            );
          }
        } else {
          return (
            <Fragment key={text}>
              <Divider />
              <ListSubheader>{text}</ListSubheader>

              {children.map(({ text, internal, link }) => {
                if (internal) {
                  return (
                    <MenuItemLink key={link} to={link} primaryText={text} />
                  );
                } else {
                  return (
                    <MenuItemLink
                      primaryText={text}
                      key={link}
                      to={{ pathname: link }}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  );
                }
              })}
            </Fragment>
          );
        }
      })}
    </Drawer>
  );
};

export default SideMenu;
