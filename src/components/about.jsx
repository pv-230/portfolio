import styled from 'styled-components';

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
`;

const AboutHeader = styled.h2`
  font-size: 1.2rem;
  text-align: center;
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
        <AboutHeader>About</AboutHeader>
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
