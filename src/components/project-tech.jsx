import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TechIcon } from '../common/common-styles';

const TechList = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 0;
`;

//-------------------------------------------------------------------------------------------------

function ProjectTech({ techArr }) {
  return (
    <TechList>
      {techArr.map((tech, i) => {
        const filename = tech.toLowerCase().replaceAll(' ', '-');
        return (
          <TechIcon
            src={new URL(`/src/assets/svg/${filename}.svg`, import.meta.url).href}
            alt={techArr[i]}
            title={techArr[i]}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          />
        );
      })}
    </TechList>
  );
}

ProjectTech.propTypes = {
  techArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTech;
