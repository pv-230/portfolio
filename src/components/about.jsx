import styled from 'styled-components';

import { SectionHeader } from '../common/common-styles';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60ch;
  min-height: 100vh;
  background-color: orange;
  padding: 20px;
  padding-top: calc(var(--header-height) + 40px);
  gap: 40px;
`;

const HeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const NameHeader = styled.h1`
  font-size: 1.5rem;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.p`
  margin: 5px 0;
`;

//-------------------------------------------------------------------------------------------------

function About() {
  return (
    <StyledAbout id="about">
      <HeaderGroup>
        <NameHeader>Pete Vasiljev</NameHeader>
        <p>Aspiring web developer</p>
      </HeaderGroup>
      <AboutSection>
        <SectionHeader>About</SectionHeader>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </AboutText>
        <AboutText>
          Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Hendrerit dolor magna
          eget est.
        </AboutText>
        <AboutText>
          Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Mattis vulputate enim
          nulla aliquet porttitor lacus.
        </AboutText>
      </AboutSection>
    </StyledAbout>
  );
}

export default About;
