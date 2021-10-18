import EventCreate from "./EventCreate";
import EventEdit from "./EventEdit";
import EventList from "./EventList";
import EventShow from "./EventShow";
import EventIcon from "@material-ui/icons/Event";

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: "Événements",
    },
  },
  dataModel: {
    types: ["pair:Event"],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + "events",
    slugField: "pair:label",
    dereference: ["pair:hasLocation/pair:hasPlace"],
  },
  translations: {
    fr: {
      name: "Evénement |||| Evénements",
      fields: {
        "pair:operatedBy": "Organisateur",
        "pair:label": "Nom de l’événement",
        "pair:hasType": "Type d’événement",
        "cd:organizerType": "Type d’organisateur",
        "cd:organizerName": "Nom de l’organisateur",
        "pair:description": "Description",
        "pair:comment": "Courte description",
        "pair:startDate": "Date de début",
        "pair:endDate": "Date de fin",
        "pair:hasLocation": "Adresse physique",
        "pair:involves": "Participants",
        "pair:hasTopic": "Thèmes",
        "cd:registrationPage": "Lien inscription",
        "cd:meetingPage": "Lien visio",
        "cd:documentedAt":
          "Une documentation est-elle prévue ? (capture vidéo/audio/prise de notes collaborative, etc.)",
      },
    },
  },
};
