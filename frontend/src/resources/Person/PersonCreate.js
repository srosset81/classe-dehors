import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import PersonForm from './PersonForm';

export const PersonCreate = props => (
  <Create {...props}>
    <PersonForm />
  </Create>
);

export default PersonCreate;
