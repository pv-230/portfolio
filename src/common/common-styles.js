import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--content-max-width);
  min-height: 100vh;
  padding: 20px;
  padding-top: calc(var(--header-height) + 20px);
  gap: 20px;
`;

const SectionHeader = styled.h2`
  font-size: 1.2rem;
`;

const AdaptiveParagraph = styled.p`
  line-height: clamp(1.3rem, 3vw, 1.5rem);
  font-size: clamp(1.1rem, 3vw, 1.3rem);
`;

export { StyledSection, SectionHeader, AdaptiveParagraph };
