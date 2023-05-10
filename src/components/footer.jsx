import styled from 'styled-components';

import { Paragraph } from '../common/common-styles';
import circuit from '../assets/svg/circuit.svg';
import GitHubSvg from '../assets/svg/github.svg';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 100px 20px 20px 20px;
  background-image: linear-gradient(to bottom, var(--color-app-bg), transparent), url(${circuit});
`;

const GitHubReference = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const GitHubLink = styled.a`
  width: 96px;
  height: 96px;
  transition: 0.25s transform;
  background-color: var(--color-app-bg);
  border-radius: 50%;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const GitHubIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const GitHubText = styled(Paragraph)`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  color: var(--color-gold);
  background-color: var(--color-app-bg);
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 0 0 20px var(--color-app-bg);
`;

//-------------------------------------------------------------------------------------------------

function Footer() {
  return (
    <StyledFooter>
      <GitHubReference>
        <GitHubLink href="https://github.com/pv-230?tab=repositories" target="_blank">
          <GitHubIcon src={GitHubSvg} alt="My GitHub Projects" />
        </GitHubLink>
        <GitHubText>More projects on GitHub</GitHubText>
      </GitHubReference>
    </StyledFooter>
  );
}

export default Footer;
