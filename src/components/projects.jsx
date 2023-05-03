import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionContainer, Section, SectionHeading } from '../common/common-styles';
import Project from './project';
import projects from '../data/project-data';
import FadeWrapper from './fade-wrapper';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

const Projects = forwardRef((props, ref) => (
  <SectionContainer>
    <Section ref={ref} id="projects">
      <FadeWrapper>
        <SectionHeading>Projects</SectionHeading>
      </FadeWrapper>
      <ProjectsList>
        {projects.map((project, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <FadeWrapper key={i}>
            <Project project={project} />
          </FadeWrapper>
        ))}
      </ProjectsList>
    </Section>
  </SectionContainer>
));

export default Projects;
