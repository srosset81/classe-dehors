import React from 'react';
import { DateField } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { List, SimpleList, ListActions } from '@semapps/archipelago-layout';
import EventIcon from '@material-ui/icons/Event';

const EventList = props => (
  <List title="Calendrier" sort={{ field: 'pair:startDate', order: 'DESC' }} actions={<ListActions exporter={false} />} {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => (
        <>
          Du&nbsp;
          <DateField record={record} source="pair:startDate" showTime />
          &nbsp;au&nbsp;
          <DateField record={record} source="pair:endDate" showTime />
        </>
      )}
      leftAvatar={() =>
        <Avatar width="100%">
          <EventIcon />
        </Avatar>
      }
      linkType="show"
    />
  </List>
);

export default EventList;
