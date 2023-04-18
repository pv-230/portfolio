import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';
import Project from './project';
import projects from '../data/text-data';

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--dark-bg-color);
`;

const ProjectSection = styled(StyledSection)`
  gap: calc(var(--header-height) + 20px);
`;

const ProjectsHeader = styled(SectionHeader)`
  font-size: 4rem;
  font-weight: 500;
  color: var(--gold-font-color);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <StyledProjects>
    <ProjectSection id="projects" ref={ref}>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsList>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ProjectsList>
    </ProjectSection>
  </StyledProjects>
));

export default Projects;
