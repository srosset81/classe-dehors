import React from "react";
import { ReferenceField, TextField } from "react-admin";
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from "@semapps/archipelago-layout";
import EventIcon from "@material-ui/icons/Event";

import isSameDay from "date-fns/isSameDay";
import format from "date-fns/format";

import React from "react";

import { Avatar } from "@material-ui/core";
import { List, SimpleList } from "@semapps/archipelago-layout";
import EventIcon from "@material-ui/icons/Event";
import MarkdownIntroduction from "../../markdown/MarkdownIntroduction";
import { isBefore } from "date-fns";

const postRowStyle = (record, index) => {
  const pastEvent = isBefore(new Date(record["pair:endDate"]), new Date());
  return {
    backgroundColor: pastEvent ? "lightgray" : "white",
  };
};

const EventList = (props) => (
  <>
    <MarkdownIntroduction pageId="agenda-introduction" />
    <List
      {...props}
      title="Calendrier"
      sort={{ field: "pair:startDate", order: "DESC" }}
      actions={false}
    >
      <SimpleList
        primaryText={(record) => record["pair:label"]}
        secondaryText={(record) => {
          const pastEvent =
            (record["pair:endDate"] &&
              isBefore(new Date(record["pair:endDate"]), new Date())) ||
            (!record["pair:endDate"] &&
              isBefore(new Date(record["pair:startDate"]), new Date()));

          if (pastEvent) {
            return `Passé:\xa0le\xa0${format(
              new Date(record["pair:startDate"]),
              "dd/MM/yyyy"
            )}`;
          }
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
        tertiaryText={(record) => {
          if (record["pair:operatedBy"]) {
            return (
              <ReferenceField
                record={record}
                reference="Organization"
                basePath="Organization" // Hack to get access to to Organization data
                source="pair:operatedBy"
                linkType="show"
              >
                <TextField source="pair:label" />
              </ReferenceField>
            );
          }
          return "";
        }}
        leftAvatar={() => (
          <Avatar width="100%">
            <EventIcon />
          </Avatar>
        )}
        linkType="show"
        rowStyle={postRowStyle}
      />
    </List>
  </>
);

export default EventList;
