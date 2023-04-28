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
  const newTechArr = techArr.map((tech) => tech.toLowerCase().replaceAll(' ', '-'));

  return (
    <TechList>
      {newTechArr.map((tech, i) => (
        <TechIcon
          src={`src/assets/svg/${tech}.svg`}
          alt={techArr[i]}
          title={techArr[i]}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      ))}
    </TechList>
  );
}

ProjectTech.propTypes = {
  techArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTech;
