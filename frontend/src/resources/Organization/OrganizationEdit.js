import React from "react";
import { Edit } from "@semapps/archipelago-layout";
import OrganizationTitle from "./OrganizationTitle";
import OrganizationForm from "./OrganizationForm";

export const OrganizationEdit = (props) => (
  <Edit title={<OrganizationTitle />} {...props}>
    <OrganizationForm mode="edit" />
  </Edit>
);

export default OrganizationEdit;
