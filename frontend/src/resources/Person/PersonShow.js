import React from 'react';
import { TextField } from 'react-admin';
import { Hero, Show, MainList } from '@semapps/archipelago-layout';
import { MapField } from "@semapps/geo-components";
import PersonTitle from './PersonTitle';

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero>
        <TextField source="pair:firstName" />
      </Hero>
      <MainList>
        <MapField
          source="pair:hasLocation"
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default PersonShow;
