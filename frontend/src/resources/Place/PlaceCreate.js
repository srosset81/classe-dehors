import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import PlaceForm from './PlaceForm';

export const PlaceCreate = props => (
  <Create {...props}>
    <PlaceForm mode="create" />
  </Create>
);

export default PlaceCreate;