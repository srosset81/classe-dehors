import React from 'react';
import { required, SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { DateTimeInput } from '@semapps/date-components';
import frLocale from "date-fns/locale/fr";

const urlValidation = (value) => {
  if (value && !value.startsWith('http://') && !value.startsWith('https://')) {
    return 'Veuillez entrer une adresse valide';
  }
  return undefined;
};

const EventForm = props => (
  <SimpleForm {...props} redirect="show">
    <TextInput source="pair:label" validate={required()} fullWidth />
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
    <TextInput source="cd:registrationPage" validate={urlValidation} fullWidth />
    <TextInput source="cd:meetingPage" validate={urlValidation} fullWidth />
  </SimpleForm>
);

export default EventForm;
