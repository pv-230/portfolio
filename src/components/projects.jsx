import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionContainer, Section, SectionHeading, Paragraph } from '../common/common-styles';
import Project from './project';
import projects from '../data/project-data';
import FadeWrapper from './fade-wrapper';
import GitHubSvg from '../assets/svg/github.svg';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GitHubReference = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-top: 1px dashed var(--color-neutral-6);
  padding: 40px 0;
`;

const GitHubLink = styled.a`
  width: 96px;
  height: 96px;
  transition: 0.25s transform;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const GitHubText = styled(Paragraph)`
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-gold);
`;

const GitHubIcon = styled.img`
  width: 100%;
  height: 100%;
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
        <FadeWrapper>
          <GitHubReference>
            <GitHubText href="https://github.com/pv-230?tab=repositories">
              More projects on GitHub
            </GitHubText>
            <GitHubLink href="https://github.com/pv-230?tab=repositories">
              <GitHubIcon src={GitHubSvg} alt="My GitHub Projects" />
            </GitHubLink>
          </GitHubReference>
        </FadeWrapper>
      </ProjectsList>
    </Section>
  </SectionContainer>
));

export default Projects;
