import PersonCreate from './PersonCreate';
import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
    show: PersonShow,
    create: PersonCreate,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Profils'
    }
  },
  dataModel: {
    types: ['foaf:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'users',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: ['pair:label']
  },
  translations: {
    fr: {
      name: 'Profil |||| Profils',
      fields: {
        'pair:label': 'Prénom ou pseudo',
        'pair:hasType': 'Type de profil',
        'pair:e-mail': 'Adresse e-mail',
        'pair:image': 'Photo',
        'pair:aboutPage': 'Page de contact',
        'pair:webPage': 'Avez-vous un site internet ou blog ?',
        'pair:hasLocation': 'Lieu de pratique de la classe dehors',
        'pair:offers': 'Ressources partagées',
        'cd:teachingLevel': 'Niveau d’enseignement',
        // TODO: remove from data structure ?
        // 'cd:subjects': 'Disciplines / Thèmes abordés',
        'cd:structureType': 'Type de structure',
        'cd:structureName': 'Nom de la structure',
        'cd:structureLocality': 'Commune',
        'cd:practiceTime': 'Depuis quand pratiquez-vous la classe dehors ?',
        'cd:practiceFrequency': 'A quelle fréquence, quelle durée ?',
        'cd:practiceSubjects': 'Disciplines mobilisées dehors ?',
        'cd:skills': 'Quels savoirs/pratiques/compétence pourriez-vous partager avec des collègues intéressés par la classe dehors ?',
        'cd:needs': 'Avez-vous des questions ou des besoins urgents pour développer votre pratique de la classe dehors?',
        'cd:comments': 'Commentaires et suggestions'
      }
    }
  }
};
