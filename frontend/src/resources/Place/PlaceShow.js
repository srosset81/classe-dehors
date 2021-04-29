import React from 'react';
import { Show, MarkdownField, MainList, SimpleList } from '@semapps/archipelago-layout';
import { Avatar, makeStyles } from '@material-ui/core';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import PlaceTitle from './PlaceTitle';
import PersonIcon from "@material-ui/icons/Person";

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
          <SimpleList
            primaryText={record => record?.['pair:label']}
            leftAvatar={() => (
              <Avatar width="100%">
                <PersonIcon />
              </Avatar>
            )}
            linkType="show"
          />
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
