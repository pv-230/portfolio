import styled from 'styled-components';

import { SectionContainer, StyledSection, SectionHeader } from '../common/common-styles';
import Project from './project';
import projects from '../data/text-data';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

function Projects() {
  return (
    <SectionContainer>
      <StyledSection>
        <SectionHeader>Projects</SectionHeader>
        <ProjectsList>
          {projects.map((project, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Project project={project} key={i} />
          ))}
        </ProjectsList>
      </StyledSection>
    </SectionContainer>
  );
}

export default Projects;
