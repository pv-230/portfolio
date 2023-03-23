import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';

const StyledProjects = styled(StyledSection)`
  color: var(--light-90);
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <StyledProjects id="projects" ref={ref}>
    <SectionHeader>Projects</SectionHeader>
    <p>This is the project section.</p>
  </StyledProjects>
));

export default Projects;
