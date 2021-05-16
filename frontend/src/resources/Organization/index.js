import OrganizationCreate from "./OrganizationCreate";
import OrganizationEdit from "./OrganizationEdit";
import OrganizationList from "./OrganizationList";
import OrganizationShow from "./OrganizationShow";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: OrganizationCreate,
    edit: OrganizationEdit,
    icon: AccountBalanceIcon,
    options: {
      label: "Organizations",
    },
  },
  dataModel: {
    types: ["pair:organizationOfMembership"],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + "organizations",
    slugField: ["pair:label"],
  },
  translations: {
    fr: {
      name: "Organisation |||| Organisations",
      fields: {
        "pair:label": "Nom",
        "pair:description": "Description",
        "pair:webPage": "Lien vers le site internet ou le blog",
      },
    },
  },
};
