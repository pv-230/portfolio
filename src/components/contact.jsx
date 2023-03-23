import { forwardRef } from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';

const StyledContact = styled(StyledSection)`
  color: var(--light-90);
`;

//-------------------------------------------------------------------------------------------------

const Contact = forwardRef((props, ref) => (
  <StyledContact id="contact" ref={ref}>
    <SectionHeader>Contact</SectionHeader>
    <p>This is the contact section.</p>
  </StyledContact>
));

export default Contact;
