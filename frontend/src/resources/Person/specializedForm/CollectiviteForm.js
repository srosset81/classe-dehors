import React from "react";
import { TextInput, required } from "react-admin";
import MarkdownInput from "../../../markdown/MarkdownInput";
import { LargeLabel } from "@semapps/archipelago-layout";
import ReferenceQuickCreateInput from "../../../pair/ReferenceQuickCreateInput";
import PairLocationInput from "../../../pair/PairLocationInput";

const CollectiviteForm = ({ mode, ...rest }) => (
  <>
    <LargeLabel>Profil</LargeLabel>
    <TextInput
      source="pair:label"
      label="Prénom ou Nom"
      validate={required()}
      fullWidth
    />
    <TextInput
      source="cd:structureName"
      label="Nom de la collectivité"
      validate={required()}
      fullWidth
    />
    <TextInput
      source="cd:position"
      label="Poste occupé"
      validate={required()}
      fullWidth
    />
    <ReferenceQuickCreateInput
      reference="Place"
      source="pair:hasLocation"
      selectOptionText="pair:label"
      label="Adresse de la collectivité"
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

    <LargeLabel>Pratique de la classe dehors</LargeLabel>
    <TextInput
      source="cd:actions"
      label="Quelles actions menez-vous pour faciliter la classe dehors dans votre collectivité ?"
      fullWidth
    />
    <TextInput
      source="cd:developmentWish"
      label="Que souhaiteriez-vous développer en lien avec la classe dehors ?"
      fullWidth
    />

    <LargeLabel>Communauté</LargeLabel>
    <TextInput
      source="cd:proposedContributions"
      label="Quelle contribution pouvez - vous apporter pour faciliter la classe dehors pour les autres collectivités ou les acteurs de la classe dehors ?"
      validate={required()}
      fullWidth
    />

    <LargeLabel>Contact</LargeLabel>
    {mode === "create" && (
      <TextInput
        source="pair:e-mail"
        label="Adresse mail"
        helperText="Votre adresse mail n'apparaîtra pas publiquement. On pourra vous écrire via un formulaire de contact."
        fullWidth
      />
    )}

    <TextInput source="pair:aboutPage" label="Site web" fullWidth />
  </>
);

export default CollectiviteForm;
