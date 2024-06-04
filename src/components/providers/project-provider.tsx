'use client';

import { Provider } from 'react-redux';
import { ProjectsTablePage } from '@pages';
import { store } from '@redux';

export const ProjectProvider: React.FC = () => {
  return (
    <Provider store={store}>
      <ProjectsTablePage />
    </Provider>
  );
};
