import React from 'react';
import { ReferenceField, TextField } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { List, SimpleList, ListActions } from '@semapps/archipelago-layout';
import EventIcon from '@material-ui/icons/Event';
import EventFilterSidebar from './EventFilterSidebar';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';

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
      )}
      tertiaryText={record => {
        if (record["pair:startDate"] && record["pair:endDate"]) {
          if (
            isSameDay(
              new Date(record["pair:startDate"]),
              new Date(record["pair:endDate"])
            )
          ) {
            // Same day : Le xx/xx/xxxx de tt:tt à tt:tt
            return `Le\xa0${format(
              new Date(record["pair:startDate"]),
              "dd/MM/yyyy"
            )} de\xa0${format(
              new Date(record["pair:startDate"]),
              "kk:mm"
            )}\xa0à\xa0${format(new Date(record["pair:endDate"]), "kk:mm")}`;
          } else {
            // Different days : Du xx/xx/xxxx tt:tt au xx/xx/xxxx tt:tt
            return `Du\xa0${format(
              new Date(record["pair:startDate"]),
              "dd/MM/yyyy\xa0kk:mm"
            )} au\xa0${format(
              new Date(record["pair:endDate"]),
              "dd/MM/yyyy\xa0kk:mm"
            )}`;
          }
        }
        if (record["pair:startDate"]) {
          // Only start day indicated : La xx/xx/xxxx à tt:tt
          return `Le\xa0${format(
            new Date(record["pair:startDate"]),
            "dd/MM/yyyy"
          )}\xa0à\xa0${format(new Date(record["pair:startDate"]), "kk:mm")}`;
        }
        return "";
      }}
      leftAvatar={() => (
        <Avatar width="100%">
          <EventIcon />
        </Avatar>
      )}
      linkType="show"
    />
  </List>
);

export default EventList;
