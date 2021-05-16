import React from 'react';
import { UrlField, DateField, TextField } from 'react-admin';
import { ReferenceField } from '@semapps/semantic-data-provider';
import {
  Hero,
  Show,
  MainList,
  MarkdownField,
} from '@semapps/archipelago-layout';
import EventTitle from './EventTitle';

const EventShow = props => (
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
        <UrlField source="cd:registrationPage" />
        <UrlField source="cd:meetingPage" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
      </MainList>
    </>
  </Show>
);

export default EventShow;
