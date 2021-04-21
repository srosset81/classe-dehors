import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { extractContext, LocationInput } from "@semapps/geo-components";
import { PersonsInput } from "../../inputs";

export const PlaceForm = ({ mode, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="pair:label" fullWidth />
    <MarkdownInput multiline source="pair:description" fullWidth />
    {mode === 'edit' && (<PersonsInput source="pair:locationOf" />)}
    <LocationInput
      mapboxConfig={{
        access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
        types: ['place', 'address'],
        country: ['fr', 'be', 'ch']
      }}
      source="pair:hasPostalAddress"
      parse={value => ({
        type: 'pair:PostalAddress',
        'pair:label': value.place_name,
        'pair:addressLocality': value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
        'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
        'pair:addressZipCode': extractContext(value.context, 'postcode'),
        'pair:addressCountry': extractContext(value.context, 'country'),
        'pair:longitude': value.center[0],
        'pair:latitude': value.center[1],
      })}
      optionText={resource => resource['pair:label']}
      fullWidth
    />
  </SimpleForm>
);

export default PlaceForm;
