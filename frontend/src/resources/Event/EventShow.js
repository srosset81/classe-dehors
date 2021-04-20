import React from 'react';
import { TextField, UrlField, DateField } from 'react-admin';
import { Hero, Show, MainList, SeparatedListField, MarkdownField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import EventTitle from './EventTitle';

const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <>
      <Hero>
        <TextField source="pair:comment" />
        <DateField source="pair:startDate" showTime />
        <DateField source="pair:endDate" showTime />
        <UrlField source="pair:aboutPage" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default EventShow;
