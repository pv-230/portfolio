import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';

const StyledProjects = styled(StyledSection)`
  background-color: yellow;
`;

//-------------------------------------------------------------------------------------------------

function Projects() {
  return (
    <StyledProjects id="projects">
      <SectionHeader>Projects</SectionHeader>
      <p>This is the project section.</p>
    </StyledProjects>
  );
}

export default Projects;
