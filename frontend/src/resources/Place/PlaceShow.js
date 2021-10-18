import React from "react";
import {
  Show,
  MarkdownField,
  MainList,
  SimpleList,
} from "@semapps/archipelago-layout";
import { Avatar, makeStyles, Button } from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import { MapField } from "@semapps/geo-components";
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import PlaceTitle from "./PlaceTitle";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingTop: 0,
  },
  backButtonContainer: {
    textAlign: "right",
  },
}));

const PlaceShow = (props) => {
  const classes = useStyles();
  return (
    <Show title={<PlaceTitle />} classes={{ card: classes.card }} {...props}>
      <>
        <MainList>
          <ReferenceArrayField reference="Person" source="pair:locationOf">
            <SimpleList
              primaryText={(record) => record?.["pair:label"]}
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
            address={(record) =>
              record?.["pair:hasPostalAddress"]?.["pair:label"]
            }
            latitude={(record) =>
              record?.["pair:hasPostalAddress"]?.["pair:latitude"]
            }
            longitude={(record) =>
              record?.["pair:hasPostalAddress"]?.["pair:longitude"]
            }
          />

          <MarkdownField source="pair:description" addLabel />
        </MainList>
        <div className={classes.backButtonContainer}>
          <Link to="/Place">
            <Button variant="contained" color="primary" endIcon={<MapIcon />}>
              Retour sur la carte
            </Button>
          </Link>
        </div>
      </>
    </Show>
  );
};

export default PlaceShow;
