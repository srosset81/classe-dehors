import React from 'react';
import { List, SimpleList, ListActions } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";
import { Avatar } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import MarkdownIntroduction from "../../markdown/MarkdownIntroduction";

const PersonList = (props) => (
  <>
    <MarkdownIntroduction pageId="annuaire-introduction" />
    <List
      title=""
      aside={<PersonFilterSidebar />}
      sort={{ field: "pair:label", order: "DESC" }}
      perPage={100}
      pagination={false}
      actions={<ListActions exporter={false}/>}
      {...props}
    >
        <SimpleList
          primaryText={(record) => record["pair:label"]}
          leftAvatar={() => (
            <Avatar width="100%">
              <PersonIcon />
            </Avatar>
          )}
          linkType="show"
        />
     
    </List>
  </>
);

export default PersonList;
