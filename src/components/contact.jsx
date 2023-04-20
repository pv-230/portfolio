import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection } from '../common/common-styles';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-app-bg);
`;

//-------------------------------------------------------------------------------------------------

const Contact = forwardRef((props, ref) => (
  <StyledContact id="contact" ref={ref}>
    <StyledSection>
      <h2>Contact</h2>
      <p>This is the contact section.</p>
    </StyledSection>
  </StyledContact>
));

export default Contact;
