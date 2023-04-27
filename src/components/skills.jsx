import styled from 'styled-components';

import skills from '../data/skills-data';
import { SubheadingTitle, SubheadingText } from '../common/common-styles';

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--color-neutral-10);
  border-radius: 5px;
`;

const SkillsHeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--color-neutral-6);
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const SkillsListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 5px;
`;

const TechIcon = styled.img`
  width: 32px;
  height: 32px;
`;

//-------------------------------------------------------------------------------------------------

function Skills() {
  return (
    <StyledSkills>
      <SkillsHeaderGroup>
        <SubheadingTitle>Technology</SubheadingTitle>
        <SubheadingText>Here are some things I have worked with before</SubheadingText>
      </SkillsHeaderGroup>
      <SkillsList>
        {skills.map((skill, i) => {
          const filename = skill.toLowerCase().replaceAll(' ', '-');
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SkillsListItem key={i}>
              <TechIcon src={`src/assets/svg/${filename}.svg`} alt={skill} title={skill} />
              <span>{skill}</span>
            </SkillsListItem>
          );
        })}
      </SkillsList>
    </StyledSkills>
  );
}

export default Skills;
