import React from "react";
import { MapList } from "@semapps/geo-components";
import { ResourceContextProvider, ListBase } from "react-admin";

const Map = ({ height = 500 }) => {
  return (
    <ResourceContextProvider value="Place">
      <ListBase perPage={1000} basePath="/Place">
        <MapList
          height={height}
          center={[47, 3.1421]}
          zoom={5}
          latitude={(record) => {
            return record?.["pair:hasPostalAddress"]?.["pair:latitude"];
          }}
          longitude={(record) =>
            record?.["pair:hasPostalAddress"]?.["pair:longitude"]
          }
          label={(record) => record?.["pair:label"]}
          description={(record) =>
            record?.["pair:hasPostalAddress"]?.["pair:label"]
          }
          scrollWheelZoom
        />
      </ListBase>
    </ResourceContextProvider>
  );
};
export default Map;
