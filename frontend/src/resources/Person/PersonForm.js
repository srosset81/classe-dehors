import React from "react";

import EducationNationalForm from "./specializedForm/EducationNationalForm";
import AssociationForm from "./specializedForm/AssociationForm";
import CollectiviteForm from "./specializedForm/CollectiviteForm";
import LaboratoireDeRechercheForm from "./specializedForm/LaboratoireDeRechercheForm";
import { profileType } from "../../constants.js";
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
      helperText="Afin de vous enregistrer sur la carte, merci de bien vouloir sélectionner votre profil"
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
            return <EducationNationalForm mode={mode} {...rest} />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/association"
          ) {
            return <AssociationForm mode={mode} {...rest} />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/collectivite"
          ) {
            return <CollectiviteForm mode={mode} {...rest} />;
          }
          if (
            formData["pair:hasType"] ===
            "https://data.classe-dehors.org/types/laboratoire-de-recherche"
          ) {
            return <LaboratoireDeRechercheForm mode={mode} {...rest} />;
          }
          return null;
        }}
      </FormDataConsumer>
    </SimpleForm>
  );
};

export default PersonForm;
