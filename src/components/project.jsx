import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectTech from './project-tech';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px dashed gray;
  padding-top: 10px;
`;

const ProjectHeader = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledAnchor = styled.a`
  text-transform: uppercase;

  &:link {
    color: var(--light-font-color);
  }

  &:visited {
    color: var(--light-font-color-2);
  }

  &:active {
    color: var(--light-font-color-2);
  }
`;

//-------------------------------------------------------------------------------------------------

function Project({ project }) {
  return (
    <StyledProject>
      <ProjectHeader>{project.name}</ProjectHeader>
      <Links>
        {project.liveLink && <StyledAnchor href={project.liveLink}>Demo</StyledAnchor>}
        {project.liveLink && '|'}
        <StyledAnchor href={project.githubLink}>Source</StyledAnchor>
      </Links>
      <ProjectTech techArr={project.tech} />
      <p>{project.description}</p>
    </StyledProject>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
