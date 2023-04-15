import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--darker-bg-color);
  border-bottom: 1px solid var(--halfgray-border-color);
  gap: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  opacity: 0%;
  animation: 0.75s linear 2.25s forwards fadein;
`;

const NavList = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavLink = styled.a`
  display: block;
  text-align: center;
  padding: 5px;
  font-size: 1.2rem;
  color: ${({ active }) => (active ? 'var(--gold-font-color)' : 'var(--light-font-color)')};
  text-decoration: none;
  border-top: 5px solid transparent;
  border-bottom: ${({ active }) =>
    active ? '5px solid var(--gold-font-color)' : '5px solid transparent'};

  &:focus-visible {
    outline: 2px solid var(--red);
    color: var(--gold-font-color);
    border-bottom: 5px solid var(--gold-font-color);
  }

  @media (hover: hover) {
    &:hover {
      color: var(--gold-font-color);
      border-bottom: 5px solid var(--gold-font-color);
    }
  }
`;

//-------------------------------------------------------------------------------------------------

function Header({ currentSection }) {
  return (
    <StyledHeader>
      <NavList>
        <NavLink href="#about" active={currentSection === 'about'}>
          About
        </NavLink>
        <NavLink href="#projects" active={currentSection === 'projects'}>
          Projects
        </NavLink>
        <NavLink href="#contact" active={currentSection === 'contact'}>
          Contact
        </NavLink>
      </NavList>
    </StyledHeader>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default Header;
