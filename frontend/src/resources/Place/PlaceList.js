import React from "react";

import { MapList } from "@semapps/geo-components";

import MarkdownIntroduction from "../../markdown/MarkdownIntroduction";
import { List } from "react-admin";

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
      />
    </List>
  </>
);

export default PlaceList;
