import React from "react";
import { ReferenceField } from "@semapps/semantic-data-provider";

import { UrlField, DateField, SelectField, TextField } from "react-admin";
import {
  Hero,
  Show,
  MainList,
  MarkdownField,
} from "@semapps/archipelago-layout";
import EventTitle from "./EventTitle";
import { eventType, organizerType } from "constants.js";

const EventShow = (props) => (
  <Show title={<EventTitle />} {...props}>
    <>
      <Hero>
        <DateField source="pair:startDate" showTime />
        <DateField source="pair:endDate" showTime />
        <ReferenceField
          reference="Organization"
          source="pair:operatedBy"
          linkType="show"
        >
          <TextField source="pair:label" />
        </ReferenceField>

        <SelectField source="pair:hasType" choices={eventType} />
        <TextField source="cd:organizerName" fullWidth />
        <SelectField source="cd:organizerTypee" choices={organizerType} />

        <UrlField source="cd:registrationPage" />
        <UrlField source="cd:meetingPage" />
        <TextField source="cd:documentedAt" fullWidth />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
      </MainList>
    </>
  </Show>
);

export default EventShow;
