import React from 'react';
import { List, GridList, AvatarField } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";

const PersonList = props => (
  <List title="Annuaire" aside={<PersonFilterSidebar />} sort={{ field: 'as:name', order: 'DESC' }} perPage={100} pagination={false} {...props}>
    <GridList xs={6} sm={3} linkType="show">
      <AvatarField label="pair:label" image="pair:image" labelColor="#7E7EF6" />
    </GridList>
  </List>
);

export default PersonList;
