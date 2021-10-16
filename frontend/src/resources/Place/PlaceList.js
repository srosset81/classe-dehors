import React from "react";

import { MapList } from "@semapps/geo-components";

import MarkdownIntroduction from "../../markdown/MarkdownIntroduction";

import {
  List,
  ShowButton,
  EditButton,
  useResourceDefinition,
  ReferenceArrayField,
  SimpleList,
} from "react-admin";
import PersonIcon from "@material-ui/icons/Person";
import { Avatar, Typography } from "@material-ui/core";

const PopupContent = ({ record, basePath }) => {
  const resourceDefinition = useResourceDefinition({});
  return (
    <>
      {record.label && <Typography variant="h5">{record.label}</Typography>}
      {record.description && (
        <Typography>
          {record.description.length > 150
            ? record.description.substring(0, 150) + "..."
            : record.description}
        </Typography>
      )}
      {record["pair:locationOf"] && (
        <ReferenceArrayField
          reference="Person"
          source="pair:locationOf"
          record={{
            ...record,
            "pair:locationOf":
              typeof record["pair:locationOf"] === "string"
                ? [record["pair:locationOf"]]
                : record["pair:locationOf"],
          }}
        >
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
      )}
      {resourceDefinition.hasShow && (
        <ShowButton basePath={basePath} record={record} />
      )}
      {resourceDefinition.hasEdit && (
        <EditButton basePath={basePath} record={record} />
      )}
    </>
  );
};

const PlaceList = (props) => (
  <>
    <MarkdownIntroduction pageId="place-introduction" />

    <List
      {...props}
      perPage={1000}
      pagination={false}
      label="Carte"
      exporter={false}
      actions={false}
    >
      <MapList
        latitude={(record) =>
          record?.["pair:hasPostalAddress"]?.["pair:latitude"]
        }
        longitude={(record) =>
          record?.["pair:hasPostalAddress"]?.["pair:longitude"]
        }
        label={(record) => record?.["pair:label"]}
        description={(record) =>
          record?.["pair:hasPostalAddress"]?.["pair:label"]
        }
        scrollWheelZoom
        popupContent={PopupContent}
      />
    </List>
  </>
);

export default PlaceList;
