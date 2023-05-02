import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tech from './tech';
import {
  SectionContainer,
  Section,
  SectionHeading,
  ParagraphContainer,
  Paragraph,
} from '../common/common-styles';
import { createIntersectionObserver } from '../common/utils';

const StrongText = styled.strong`
  color: var(--color-green);
  font-weight: 500;
`;

//-------------------------------------------------------------------------------------------------

function About({ setCurrentSection }) {
  const sectionId = 'about';
  const aboutRef = useRef(null);

  // Sets currently highlighted section in the header
  useEffect(() => {
    const observer = createIntersectionObserver(setCurrentSection, [sectionId]);
    observer.observe(aboutRef.current);
  }, []);

  return (
    <SectionContainer>
      <Section id={sectionId} ref={aboutRef}>
        <SectionHeading>About</SectionHeading>
        <ParagraphContainer>
          <Paragraph>
            My goal is to become a full-time web developer. My earliest experience with computers
            was in the 90&apos;s as a kid playing DOS games. Eventually, I decided to pursue a
            degree in computer science. My interest in web development began during my final
            semesters where I worked with a couple groups to build full-stack web applications.
          </Paragraph>
          <Paragraph>
            My focus is on front-end web development, although I have some experience with{' '}
            <StrongText>Flask</StrongText>, <StrongText>MongoDB</StrongText>,{' '}
            <StrongText>Firebase</StrongText>, and <StrongText> MySQL</StrongText>. There is so
            much to learn about web development and I find myself experimenting with different ways
            to build projects. I currently prefer to build my projects using{' '}
            <StrongText>React</StrongText>, <StrongText>Vite</StrongText>, and{' '}
            <StrongText>Styled Components</StrongText>.
          </Paragraph>
        </ParagraphContainer>
        <Tech />
      </Section>
    </SectionContainer>
  );
}

About.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default About;
