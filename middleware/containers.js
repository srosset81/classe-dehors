module.exports = [
  {
    path: '/users',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/events',
    acceptedTypes: 'pair:Event',
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/places',
    acceptedTypes: 'pair:Place',
    dereference: ['pair:hasPostalAddress']
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/status',
    acceptedTypes: [
      'pair:Status',
      'pair:ActivityStatus',
      'pair:AgentStatus',
      'pair:DocumentStatus',
      'pair:EventStatus',
      'pair:IdeaStatus',
      'pair:ProjectStatus',
      'pair:TaskStatus'
    ]
  },
  {
    path: '/types',
    acceptedTypes: [
      'pair:Type',
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ]
  },
  {
    path: '/organizations',
    acceptedTypes: 'pair:Organization'
  },
  {
    path: '/pages'
  },
  {
    path: '/files'
  }
];
