import React from "react";
import { UrlField } from "react-admin";
import { Show, MainList, MarkdownField } from "@semapps/archipelago-layout";
import OrganizationTitle from "./OrganizationTitle";

const OrganizationShow = (props) => (
  <Show title={<OrganizationTitle />} {...props}>
    <MainList>
      <MarkdownField source="pair:description" />
      <UrlField source="pair:webPage" />
    </MainList>
  </Show>
);

export default OrganizationShow;
