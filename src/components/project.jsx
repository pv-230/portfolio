import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectTech from './project-tech';
import { AdaptiveParagraph } from '../common/common-styles';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px dashed hsl(0, 0%, 30%);
  padding: 40px 0;
`;

const ProjectHeader = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

const ProjectSummary = styled(AdaptiveParagraph)`
  color: darkgray;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: var(--light-font-color);

  &:active {
    color: var(--light-font-color-2);
  }
`;

//-------------------------------------------------------------------------------------------------

function Project({ project }) {
  return (
    <StyledProject>
      <ProjectHeader>{project.name}</ProjectHeader>
      <ProjectSummary>{project.summary}</ProjectSummary>
      <Links>
        {project.liveLink && <StyledAnchor href={project.liveLink}>Demo</StyledAnchor>}
        <StyledAnchor href={project.githubLink}>Source</StyledAnchor>
      </Links>
      <ProjectTech techArr={project.tech} />
      <AdaptiveParagraph>{project.details}</AdaptiveParagraph>
    </StyledProject>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
