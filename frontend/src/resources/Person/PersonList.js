import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";
import { ListActions } from "react-admin";
import { Avatar } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

const PersonList = props => (
  <List
    title="Annuaire"
    aside={<PersonFilterSidebar />}
    sort={{ field: 'pair:label', order: 'DESC' }}
    perPage={100}
    pagination={false}
    actions={<ListActions exporter={false}/>}
    {...props}
  >
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => (
        <Avatar width="100%">
          <PersonIcon />
        </Avatar>
      )}
      linkType="show"
    />
  </List>
);

export default PersonList;
