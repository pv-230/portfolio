import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-app-bg);
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--content-max-width);
  padding: var(--header-height) 20px;
  gap: 40px;
`;

const SectionHeader = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: var(--color-gold);
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.2;
`;

const SubheadingTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

const SubheadingText = styled.p`
  color: var(--color-secondary-font);
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
`;

export {
  SectionContainer,
  StyledSection,
  SectionHeader,
  ParagraphContainer,
  StyledParagraph,
  SubheadingTitle,
  SubheadingText,
};
