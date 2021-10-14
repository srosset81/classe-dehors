import React from "react";
import { TextField, SelectField } from "react-admin";

import { Hero } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import ContactField from "contact/ContactField";

import SubList from "layout/SubList";
import { teachingLevel, schoolType } from "constants.js";

const EducationNationalDisplay = ({ mode, ...rest }) => (
  <>
    <Hero>
      <TextField source="pair:label" label="Prénom ou Nom" />
      <ReferenceField
        reference="Type"
        source="pair:hasType"
        label="Type de profil"
        linkType={false}
      >
        <TextField label="Nom" source="pair:label" />
      </ReferenceField>
      <ReferenceField
        reference="Place"
        source="pair:hasLocation"
        label="Lieu d'implantation"
      >
        <TextField label="Nom" source="pair:label" />
      </ReferenceField>
      <TextField
        {...rest}
        source="pair:webPage"
        label="Avez-vous un site internet, un blog et/ou un compte sur un réseau social ?"
      />
      <ContactField source="pair:e-mail" />
    </Hero>
    <SubList label="Structure">
      <TextField source="cd:district" label="Académie" />
      <SelectField
        {...rest}
        source="cd:teachingLevel"
        choices={teachingLevel}
      />
      <SelectField
        {...rest}
        source="cd:structureType"
        label="Type d’école"
        choices={schoolType}
      />
      <TextField {...rest} source="cd:structureName" label="Nom de l’école" />
      <TextField
        {...rest}
        source="cd:structureLocality"
        label="Commune de l’école"
      />
    </SubList>
    <SubList label="Pratique de la classe dehors">
      <ReferenceField
        {...rest}
        reference="Place"
        source="pair:hasLocation"
        selectOptionText="pair:label"
        label="Où faite-vous classe dehors?"
        perPage={1000}
        helperText="C’est ce lieu qui apparaîtra sur la carte"
      >
        <TextField label="Nom" source="pair:label" />
      </ReferenceField>
      <TextField
        {...rest}
        source="cd:practiceTime"
        label="Depuis quand pratiquez-vous la classe dehors ?"
      />
      <TextField
        {...rest}
        source="cd:practiceFrequency"
        label="A quelle fréquence ?"
      />
    </SubList>
  </>
);

export default EducationNationalDisplay;
