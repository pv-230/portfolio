import styled from 'styled-components';
import PropTypes from 'prop-types';

const TechList = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 0;
`;

const TechIcon = styled.img`
  width: 32px;
  height: 32px;
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
          key={tech}
        />
      ))}
    </TechList>
  );
}

ProjectTech.propTypes = {
  techArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTech;
