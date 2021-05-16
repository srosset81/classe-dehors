import React from "react";
import { TextField, UrlField } from "react-admin";
import {
  Hero,
  Show,
  MainList,
  MarkdownField,
} from "@semapps/archipelago-layout";
import OrganizationTitle from "./OrganizationTitle";

const OrganizationShow = (props) => (
  <Show title={<OrganizationTitle />} {...props}>
    <Hero>
      <TextField source="pair:label" />
      <UrlField source="pair:webPage" />
    </Hero>
    <MainList>
      <MarkdownField source="pair:description" />
    </MainList>
  </Show>
);

export default OrganizationShow;
