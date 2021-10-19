import React from "react";
import {
  TextInput,
  SelectInput,
  AutocompleteInput,
  required,
} from "react-admin";
import MarkdownInput from "../../../markdown/MarkdownInput";
import { LargeLabel } from "@semapps/archipelago-layout";

import { teachingLevel, academies, schoolType } from "../../../constants";
import ReferenceQuickCreateInput from "../../../pair/ReferenceQuickCreateInput";
import PairLocationInput from "../../../pair/PairLocationInput";

const EducationNationalForm = ({ mode, ...rest }) => (
  <>
    <LargeLabel>Profil</LargeLabel>
    <TextInput
      {...rest}
      source="pair:label"
      label="Prénom ou Nom"
      validate={required()}
      fullWidth
    />
    <AutocompleteInput
      {...rest}
      source="cd:district"
      label="Académie"
      validate={required()}
      choices={academies}
    />
    <TextInput
      {...rest}
      source="cd:position"
      label="Poste occupé"
      validate={required()}
      fullWidth
    />
    <SelectInput
      {...rest}
      source="cd:teachingLevel"
      validate={required()}
      choices={teachingLevel}
    />
    <SelectInput
      {...rest}
      source="cd:structureType"
      label="Type d’école"
      validate={required()}
      choices={schoolType}
    />
    <TextInput
      {...rest}
      source="cd:structureName"
      label="Nom de l’école"
      validate={required()}
      fullWidth
    />
    <TextInput
      {...rest}
      source="cd:structureLocality"
      label="Commune de l’école"
      validate={required()}
      fullWidth
    />
    <LargeLabel>Pratique de la classe dehors</LargeLabel>
    <ReferenceQuickCreateInput
      {...rest}
      reference="Place"
      source="pair:hasLocation"
      selectOptionText="pair:label"
      label="Où faite-vous classe dehors?"
      perPage={1000}
      validate={required()}
      helperText="C’est ce lieu qui apparaîtra sur la carte"
    >
      <PairLocationInput
        label="Adresse"
        source="pair:hasPostalAddress"
        fullWidth
      />
      <TextInput
        label="Nom"
        source="pair:label"
        validate={required()}
        fullWidth
      />
      <MarkdownInput
        label="Description"
        source="pair:description"
        multiline
        fullWidth
      />
    </ReferenceQuickCreateInput>
    <TextInput
      {...rest}
      source="cd:practiceTime"
      label="Depuis quand pratiquez-vous la classe dehors ?"
      fullWidth
    />
    <TextInput
      {...rest}
      source="cd:practiceFrequency"
      label="A quelle fréquence ?"
      fullWidth
    />
    <TextInput
      {...rest}
      source="pair:webPage"
      label="Avez-vous un site internet, un blog et/ou un compte sur un réseau social ?"
      fullWidth
    />
    {mode === "create" && (
      <>
        <LargeLabel>Contact</LargeLabel>
        <TextInput
          {...rest}
          source="pair:e-mail"
          label="Adresse mail"
          helperText="Votre adresse mail n'apparaîtra pas publiquement. On pourra vous écrire via un formulaire de contact."
          fullWidth
        />
      </>
    )}
  </>
);

export default EducationNationalForm;
