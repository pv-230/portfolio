import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TechIcon } from '../common/common-styles';

const TechList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 20px 0;
  margin: 0;
`;

const TechListItem = styled.li`
  list-style: none;
`;

//-------------------------------------------------------------------------------------------------

function ProjectTech({ techArr }) {
  return (
    <TechList>
      {techArr.map((tech, i) => {
        const filename = tech.toLowerCase().replaceAll(' ', '-');
        return (
          // eslint-disable-next-line react/no-array-index-key
          <TechListItem key={i}>
            <TechIcon
              src={new URL(`/src/assets/svg/${filename}.svg`, import.meta.url).href}
              alt={techArr[i]}
              title={techArr[i]}
            />
          </TechListItem>
        );
      })}
    </TechList>
  );
}

ProjectTech.propTypes = {
  techArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTech;
