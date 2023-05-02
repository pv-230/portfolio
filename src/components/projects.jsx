import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SectionContainer, Section, SectionHeading } from '../common/common-styles';
import Project from './project';
import projects from '../data/project-data';
import { createIntersectionObserver } from '../common/utils';

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

//-------------------------------------------------------------------------------------------------

function Projects({ setCurrentSection }) {
  const sectionId = 'projects';
  const projectsRef = useRef(null);

  // Sets currently highlighted section in the header
  useEffect(() => {
    const observer = createIntersectionObserver(setCurrentSection, [sectionId]);
    observer.observe(projectsRef.current);
  }, []);

  return (
    <SectionContainer>
      <Section id={sectionId} ref={projectsRef}>
        <SectionHeading>Projects</SectionHeading>
        <ProjectsList>
          {projects.map((project, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Project project={project} key={i} />
          ))}
        </ProjectsList>
      </Section>
    </SectionContainer>
  );
}

Projects.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Projects;
