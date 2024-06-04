import { ProjectProvider } from '@providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

function Projects() {
  return (
    <div className="application">
      <main className="application-content">
        <ProjectProvider />
      </main>
    </div>
  );
}

export default Projects;
