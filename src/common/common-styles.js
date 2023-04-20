import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-app-bg);
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--content-max-width);
  padding: 20px;
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
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.4rem;
`;

export { SectionContainer, StyledSection, SectionHeader, ParagraphContainer, StyledParagraph };
