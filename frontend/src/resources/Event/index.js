import EventCreate from "./EventCreate";
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'events',
    slugField: 'pair:label',
    dereference: ['pair:hasLocation/pair:hasPlace']
  },
  translations: {
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:hasLocation': 'Adresse physique',
        'pair:involves': 'Participants',
        'pair:hasTopic': 'Thèmes',
        'pair:operatedBy': 'Organisateur',
        'cd:registrationPage': 'Lien inscription',
        'cd:meetingPage': 'Lien visio',
      }
    }
  }
};
