import styled from 'styled-components';

import { StyledSection, SectionHeader } from '../common/common-styles';

const StyledContact = styled(StyledSection)`
  background-color: green;
`;

//-------------------------------------------------------------------------------------------------

function Contact() {
  return (
    <StyledContact id="contact">
      <SectionHeader>Contact</SectionHeader>
      <p>This is the contact section.</p>
    </StyledContact>
  );
}

export default Contact;
