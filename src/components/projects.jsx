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

const ProjectsHeader = styled(SectionHeader)`
  font-size: 2.75rem;
  color: var(--gold-font-color);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <StyledProjects>
    <StyledSection id="projects" ref={ref}>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsList>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ProjectsList>
    </StyledSection>
  </StyledProjects>
));

export default Projects;
