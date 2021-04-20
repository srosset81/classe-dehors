import React from 'react';
import { Edit } from '@semapps/archipelago-layout';
import PersonTitle from './PersonTitle';
import PersonForm from './PersonForm';

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} {...props}>
    <PersonForm />
  </Edit>
);

export default PersonEdit;
