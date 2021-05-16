import React from "react";
import { Create } from "@semapps/archipelago-layout";
import OrganizationForm from "./OrganizationForm";

export const OrganizationCreate = (props) => (
  <Create {...props}>
    <OrganizationForm mode="create" />
  </Create>
);

export default OrganizationCreate;
