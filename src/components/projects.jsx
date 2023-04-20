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
  background-color: var(--color-app-bg);
`;

const ProjectSection = styled(StyledSection)`
  gap: 40px;
`;

const ProjectsHeader = styled(SectionHeader)`
  font-size: 4rem;
  font-weight: 500;
  color: var(--color-gold);
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
