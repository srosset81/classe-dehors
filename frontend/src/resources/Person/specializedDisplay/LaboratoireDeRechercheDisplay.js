import React from "react";
import { TextField } from "react-admin";

import { Hero } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import ContactField from "../../../contact/ContactField";

import SubList from "../../../layout/SubList";

const LaboratoireDeRechercheDisplay = ({ mode, ...rest }) => (
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
      <ContactField source="pair:e-mail" />
    </Hero>
    <SubList label="Structure">
      <TextField source="cd:structureName" label="Université" />
      <TextField source="cd:structureSubName" label="Laboratoire" />
      <ReferenceField
        reference="Place"
        source="pair:hasLocation"
        label="Adresse du laboratoire"
      >
        <TextField label="Nom" source="pair:label" />
      </ReferenceField>
      <TextField source="cd:position" label="Poste occupé" />
      <TextField source="cd:researchTopic" label="Objets de recherche" />
    </SubList>
    <SubList label="Pratique de la classe dehors">
      <TextField
        source="cd:actions"
        label="Quel(s) projet(s) de recherche avez vous mis en place pour soutenir la classe dehors ?"
      />
      <TextField
        source="cd:developmentWish"
        label="Que souhaiteriez-vous développer en lien avec la classe dehors ?"
      />
    </SubList>
    <SubList label="Communauté">
      <TextField
        source="cd:proposedContributions"
        label="Quelle contribution pouvez-vous apporter pour faciliter la classe dehors pour les enseignants ?"
      />
    </SubList>
  </>
);

export default LaboratoireDeRechercheDisplay;
