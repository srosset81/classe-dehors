import React from 'react';
import { DateField, ReferenceField, TextField } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { List, SimpleList, ListActions } from '@semapps/archipelago-layout';
import EventIcon from '@material-ui/icons/Event';
import EventFilterSidebar from './EventFilterSidebar';

const EventList = props => (
  <List
    title="Calendrier"
    aside={<EventFilterSidebar />}
    sort={{ field: "pair:startDate", order: "DESC" }}
    actions={<ListActions exporter={false} />}
    {...props}
  >
    <SimpleList
      primaryText={record => record["pair:label"]}
      secondaryText={record => (
          <ReferenceField
            record={record}
            reference="Organization"
            basePath="Organization" // Hack to get access to to Organization data
            source="pair:operatedBy"
            linkType="show"
          >
            <TextField source="pair:label" />
          </ReferenceField>
        )
      }
      tertiaryText={(record) => (
        <>
          Du&nbsp;
          <DateField
            record={record}
            source="pair:startDate"
            options={{
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }}
          />
          &nbsp;au&nbsp;
          <DateField
            record={record}
            source="pair:endDate"
            options={{
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }}
          />
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
