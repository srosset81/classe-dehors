import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import EventForm from "./EventForm";

const EventCreate = props => (
  <Create {...props}>
    <EventForm />
  </Create>
);

export default EventCreate;
