import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import Layout from './layout/Layout';
import theme from './layout/theme';
import HomePage from './pages/HomePage';

const history = createBrowserHistory();

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    theme={theme}
    history={history}
    dashboard={HomePage}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;
