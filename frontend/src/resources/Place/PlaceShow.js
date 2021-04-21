import React from 'react';
import { Show, MarkdownField, MainList, GridList, AvatarField } from '@semapps/archipelago-layout';
import { makeStyles } from '@material-ui/core';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import PlaceTitle from './PlaceTitle';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0
  }
}));

const PlaceShow = props => {
  const classes = useStyles();
  return (
    <Show title={<PlaceTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <MarkdownField source="pair:description" addLabel />
        <ReferenceArrayField reference="Person" source="pair:locationOf">
          <GridList xs={6} sm={2} linkType="show">
            <AvatarField label="pair:label" image="pair:image" labelColor="#7E7EF6" />
          </GridList>
        </ReferenceArrayField>
        <MapField
          source="pair:hasPostalAddress"
          address={record => record?.['pair:hasPostalAddress']?.['pair:label']}
          latitude={record => record?.['pair:hasPostalAddress']?.['pair:latitude']}
          longitude={record => record?.['pair:hasPostalAddress']?.['pair:longitude']}
        />
      </MainList>
    </Show>
  );
}

export default PlaceShow;
