import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60ch;
  min-height: 100vh;
  padding: 20px;
  padding-top: calc(var(--header-height) + 20px);
  gap: 20px;
`;

const SectionHeader = styled.h2`
  font-size: 1.2rem;
`;

export { StyledSection, SectionHeader };
