import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--dark-bg-color);
`;

//-------------------------------------------------------------------------------------------------

const Contact = forwardRef((props, ref) => (
  <StyledContact id="contact" ref={ref}>
    <StyledSection>
      <SectionHeader>Contact</SectionHeader>
      <p>This is the contact section.</p>
    </StyledSection>
  </StyledContact>
));

export default Contact;
