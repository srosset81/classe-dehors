import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from 'ra-input-markdown';
import { DateTimeInput } from '@semapps/date-components';
import EventTitle from './EventTitle';
import frLocale from "date-fns/locale/fr";
import PairLocationInput from "../../pair/PairLocationInput";

const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <DateTimeInput
        source="pair:startDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <DateTimeInput
        source="pair:endDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <TextInput source="pair:aboutPage" fullWidth />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
