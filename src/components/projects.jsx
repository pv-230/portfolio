import styled from 'styled-components';

import { SectionContainer, Section, SectionHeading } from '../common/common-styles';
import Project from './project';
import projects from '../data/project-data';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

function Projects() {
  return (
    <SectionContainer>
      <Section>
        <SectionHeading>Projects</SectionHeading>
        <ProjectsList>
          {projects.map((project, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Project project={project} key={i} />
          ))}
        </ProjectsList>
      </Section>
    </SectionContainer>
  );
}

export default Projects;
