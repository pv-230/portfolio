import styled from 'styled-components';

import tech from '../data/tech-data';
import { SubheadingTitle, SubheadingText, TechIcon } from '../common/common-styles';

const StyledTech = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: hsl(240, 20%, 15%);
  border-radius: 5px;
`;

const TechHeadingGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--color-neutral-6);
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const TechListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--color-app-bg);
  user-select: none;
  transition: transform 0.15s;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.075);
    }
  }
`;

const TechName = styled.p`
  margin: 0;
  font-weight: 300;
`;

//-------------------------------------------------------------------------------------------------

function Tech() {
  return (
    <StyledTech>
      <TechHeadingGroup>
        <SubheadingTitle>Technology</SubheadingTitle>
        <SubheadingText>Here are some things I have worked with before</SubheadingText>
      </TechHeadingGroup>
      <TechList>
        {tech.map((techName, i) => {
          const filename = techName.toLowerCase().replaceAll(' ', '-');
          return (
            // eslint-disable-next-line react/no-array-index-key
            <TechListItem key={i}>
              <TechIcon
                src={new URL(`/src/assets/svg/${filename}.svg`, import.meta.url).href}
                alt={techName}
                title={techName}
              />
              <TechName>{techName}</TechName>
            </TechListItem>
          );
        })}
      </TechList>
    </StyledTech>
  );
}

export default Tech;
