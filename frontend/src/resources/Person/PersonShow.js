import React from "react";
import {
  TextField,
  SelectField,
  UrlField,
  useShowController,
} from "react-admin";
import { Hero, Show } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import PersonTitle from "./PersonTitle";
import { teachingLevel, structureType } from "../../constants";
import SubList from "../../layout/SubList";
import ContactField from "../../contact/ContactField";

import AssociationDisplay from "./specializedDisplay/AssociationDisplay";
import CollectiviteDisplay from "./specializedDisplay/CollectiviteDisplay";
import EducationNationalDisplay from "./specializedDisplay/EducationNationalDisplay";
import LaboratoireDeRechercheDisplay from "./specializedDisplay/LaboratoireDeRechercheDisplay";

const PersonShow = (props) => {
  const { record } = useShowController(props);
  if (!record) {
    return null;
  }

  if (
    record["pair:hasType"] === "https://data.classe-dehors.org/types/enseignant"
  ) {
    // dirty trick to convert teacher profiles to National Education ones.
    record["pair:hasType"] =
      "https://data.classe-dehors.org/types/education-nationale";
  }
  if (
    record &&
    record["pair:hasType"] ===
      "https://data.classe-dehors.org/types/education-nationale"
  ) {
    return (
      <Show title={<PersonTitle />} {...props}>
        <EducationNationalDisplay />
      </Show>
    );
  }
  if (
    record &&
    record["pair:hasType"] ===
      "https://data.classe-dehors.org/types/association"
  ) {
    return (
      <Show title={<PersonTitle />} {...props}>
        <AssociationDisplay />
      </Show>
    );
  }
  if (
    record &&
    record["pair:hasType"] ===
      "https://data.classe-dehors.org/types/collectivite"
  ) {
    return (
      <Show title={<PersonTitle />} {...props}>
        <CollectiviteDisplay />
      </Show>
    );
  }
  if (
    record &&
    record["pair:hasType"] ===
      "https://data.classe-dehors.org/types/laboratoire-de-recherche"
  ) {
    return (
      <Show title={<PersonTitle />} {...props}>
        <LaboratoireDeRechercheDisplay />
      </Show>
    );
  }
  return (
    <Show title={<PersonTitle />} {...props}>
      <>
        <Hero>
          <TextField label="Prénom ou pseudo" source="pair:label" />
          <ReferenceField
            reference="Type"
            source="pair:hasType"
            label="Type de profil"
            linkType={false}
          >
            <TextField source="pair:label" />
          </ReferenceField>
          <TextField label="Nom" source="pair:hasType" />
          <SelectField source="cd:teachingLevel" choices={teachingLevel} />
          {/* <TextField source="cd:subjects" /> */}
          <ContactField source="pair:e-mail" />
          <UrlField source="pair:aboutPage" />
        </Hero>
        <SubList label="Structure">
          <SelectField source="cd:structureType" choices={structureType} />
          <TextField source="cd:structureName" />
          <TextField source="cd:structureLocality" />
        </SubList>
        <SubList label="Pratique">
          <ReferenceField
            reference="Place"
            source="pair:hasLocation"
            linkType="show"
          >
            <TextField source="pair:label" />
          </ReferenceField>
          <TextField source="cd:practiceTime" fullWidth />
          <TextField source="cd:practiceFrequency" fullWidth />
          <TextField source="cd:practiceSubjects" fullWidth />
        </SubList>
        <SubList label="Communauté">
          <TextField source="cd:skills" fullWidth />
          <UrlField source="pair:webPage" fullWidth />
          <TextField source="cd:needs" fullWidth />
          <TextField source="cd:comments" fullWidth />
        </SubList>
        {/*<MainList>*/}
        {/*  <ReferenceArrayField reference="Document" source="pair:offers">*/}
        {/*    <Datagrid rowClick="show">*/}
        {/*      <TextField source="pair:label" />*/}
        {/*      <TextField source="pair:webPage" />*/}
        {/*      <ShowButton />*/}
        {/*      <EditButton />*/}
        {/*    </Datagrid>*/}
        {/*  </ReferenceArrayField>*/}
        {/*</MainList>*/}
      </>
    </Show>
  );
};

export default PersonShow;
