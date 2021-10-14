import React from "react";

import EducationNationalForm from "./specializedForm/EducationNationalForm";
import AssociationForm from "./specializedForm/AssociationForm";
import CollectiviteForm from "./specializedForm/CollectiviteForm";
import LaboratoireDeRechercheForm from "./specializedForm/LaboratoireDeRechercheForm";
import { profileType } from "constants.js";
import {
  SimpleForm,
  Toolbar,
  RadioButtonGroupInput,
  FormDataConsumer,
} from "react-admin";
import { ReferenceInput } from "@semapps/semantic-data-provider";

const acceptedHasTypeIds = profileType.map((x) => x.id);
const FilteredInput = ({ choices, ...props }) => {
  return (
    <RadioButtonGroupInput
      // <SelectInput
      {...props}
      choices={choices.filter((x) => acceptedHasTypeIds.includes(x.id))}
      optionText="pair:label"
    />
  );
};

export const PersonForm = ({ mode, ...rest }) => {
  return (
    <SimpleForm
      {...rest}
      redirect="show"
      toolbar={<Toolbar alwaysEnableSaveButton />} // Always enable save as there are problems with ReferenceQuickCreateInput
    >
      <ReferenceInput
        reference="Type"
        source="pair:hasType"
        filter={{
          a: "pair:AgentType",
        }}
      >
        <FilteredInput />
      </ReferenceInput>
      <FormDataConsumer fullWidth>
        {({ formData, ...rest }) => {
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/education-nationale"
          ) {
            return <EducationNationalForm {...rest} />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/association"
          ) {
            return <AssociationForm />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/collectivite"
          ) {
            return <CollectiviteForm />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/laboratoire-de-recherche"
          ) {
            return <LaboratoireDeRechercheForm />;
          }
          return null;
        }}
      </FormDataConsumer>
    </SimpleForm>
  );
};

export default PersonForm;
