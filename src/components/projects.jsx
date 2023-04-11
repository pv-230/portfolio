import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';
import projects from '../data/text-data';

const StyledProjects = styled(StyledSection)`
  color: var(--light-font-color);
`;

const ProjectsHeader = styled(SectionHeader)`
  font-size: 2.75rem;
  color: var(--gold-font-color);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 2px solid var(--gray-border-color);
  border-radius: 5px;
  background-color: var(--darker-bg-color);
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <StyledProjects id="projects" ref={ref}>
    <ProjectsHeader>Projects</ProjectsHeader>
    <ProjectsList>
      {projects.map((project) => (
        <ProjectInfo key={project.name}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <p>{project.description}</p>
        </ProjectInfo>
      ))}
    </ProjectsList>
  </StyledProjects>
));

export default Projects;
