import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import PersonForm from './PersonForm';

export const PersonCreate = props => (
  <Create {...props}>
    <PersonForm mode="create" />
  </Create>
);

export default PersonCreate;
