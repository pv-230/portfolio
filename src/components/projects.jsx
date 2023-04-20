import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionContainer, StyledSection, SectionHeader } from '../common/common-styles';
import Project from './project';
import projects from '../data/text-data';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <SectionContainer>
    <StyledSection id="projects" ref={ref}>
      <SectionHeader>Projects</SectionHeader>
      <ProjectsList>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ProjectsList>
    </StyledSection>
  </SectionContainer>
));

export default Projects;
