import React from "react";
import { TextField } from "react-admin";

import { Hero } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import ContactField from "../../../contact/ContactField";

import SubList from "../../../layout/SubList";

const CollectiviteDisplay = ({ mode, ...rest }) => (
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
        label="Adresse de la collectivité"
      >
        <TextField label="Nom" source="pair:label" />
      </ReferenceField>
      <ContactField source="pair:e-mail" />
    </Hero>
    <SubList label="Structure">
      <TextField source="cd:structureName" label="Nom de la collectivité" />
      <TextField source="cd:position" label="Poste occupé" />
    </SubList>
    <SubList label="Pratique de la classe dehors">
      <TextField
        source="cd:actions"
        label="Quelles actions menez-vous pour faciliter la classe dehors dans votre collectivité ?"
      />
      <TextField
        source="cd:developmentWish"
        label="Que souhaiteriez-vous développer en lien avec la classe dehors ?"
      />
    </SubList>
    <SubList label="Communauté">
      <TextField
        source="cd:proposedContributions"
        label="Quelle contribution pouvez - vous apporter pour faciliter la classe dehors pour les autres collectivités ou les acteurs de la classe dehors ?"
      />
    </SubList>
  </>
);

export default CollectiviteDisplay;
