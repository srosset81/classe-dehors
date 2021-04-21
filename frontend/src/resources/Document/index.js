import DocumentCreate from './DocumentCreate';
import DocumentEdit from './DocumentEdit';
import DocumentList from './DocumentList';
import DocumentShow from './DocumentShow';
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    create: DocumentCreate,
    edit: DocumentEdit,
    icon: DescriptionIcon,
    options: {
      label: 'Ressources'
    }
  },
  dataModel: {
    types: ['pair:Document'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'documents',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Ressource |||| Ressources',
      fields: {
        'pair:label': 'Titre',
        'pair:webPage': 'Lien',
        'pair:offeredBy': 'Partagé par'
      }
    }
  }
};
