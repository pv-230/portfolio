import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectTech from './project-tech';
import {
  ParagraphContainer,
  Paragraph,
  SubheadingTitle,
  SubheadingText,
} from '../common/common-styles';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px dashed var(--color-neutral-6);
  padding: 40px 0;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: var(--color-primary-font);

  &:active {
    color: var(--color-neutral-5);
  }
`;

//-------------------------------------------------------------------------------------------------

function Project({ project }) {
  return (
    <StyledProject>
      <SubheadingTitle>{project.name}</SubheadingTitle>
      <SubheadingText>{project.summary}</SubheadingText>
      <Links>
        {project.liveLink && <StyledAnchor href={project.liveLink}>Demo</StyledAnchor>}
        <StyledAnchor href={project.githubLink}>Source</StyledAnchor>
      </Links>
      <ProjectTech techArr={project.tech} />
      <ParagraphContainer>
        {project.details.map((paragraph, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Paragraph key={i}>{paragraph}</Paragraph>
        ))}
      </ParagraphContainer>
    </StyledProject>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
