import React from "react";
import { List, SimpleList, ListActions } from "@semapps/archipelago-layout";
import { Avatar } from "@material-ui/core";
import AccountBalanceIconIcon from "@material-ui/icons/AccountBalance";

const OrganizationList = (props) => (
  <List
    title=""
    sort={{ field: "pair:label", order: "DESC" }}
    perPage={100}
    pagination={false}
    actions={<ListActions exporter={false} />}
    {...props}
  >
    <SimpleList
      primaryText={(record) => record["pair:label"]}
      leftAvatar={() => (
        <Avatar width="100%">
          <AccountBalanceIconIcon />
        </Avatar>
      )}
      linkType="show"
    />
  </List>
);

export default OrganizationList;
