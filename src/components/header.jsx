/* eslint-disable react/forbid-prop-types */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-neutral-10);
  border-bottom: 1px solid var(--color-neutral-7);
  gap: 20px;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const NavList = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavLink = styled.button`
  display: block;
  text-align: center;
  padding: 5px;
  font-size: 1.2rem;
  color: ${({ active }) => (active ? 'var(--color-gold)' : 'inherit')};
  background-color: transparent;
  border: none;
  border-top: 5px solid transparent;
  border-bottom: ${({ active }) =>
    active ? '5px solid var(--color-gold)' : '5px solid transparent'};

  &:focus-visible {
    outline: 2px solid var(--color-red);
    color: var(--color-gold);
    border-bottom: 5px solid var(--color-gold);
    border-radius: 5px;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--color-gold);
      border-bottom: 5px solid var(--color-gold);
      cursor: pointer;
    }
  }
`;

//-------------------------------------------------------------------------------------------------

function Header({ currentSection, refs }) {
  /**
   * Event handler for smoothly scrolling to a section based on which button is clicked in the
   * header nav list.
   */
  function handleClick(e) {
    var destinationElement;

    switch (e.target.textContent) {
      case 'Home':
        destinationElement = refs.hero.current;
        break;
      case 'About':
        destinationElement = refs.about.current;
        break;
      case 'Projects':
        destinationElement = refs.projects.current;
        break;
      default:
        throw new Error('Invalid nav button text content');
    }

    destinationElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledHeader>
      <NavList>
        <NavLink onClick={handleClick} active={currentSection === 'hero'}>
          Home
        </NavLink>
        <NavLink onClick={handleClick} active={currentSection === 'about'}>
          About
        </NavLink>
        <NavLink onClick={handleClick} active={currentSection === 'projects'}>
          Projects
        </NavLink>
      </NavList>
    </StyledHeader>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string,
  refs: PropTypes.shape({
    hero: PropTypes.object,
    about: PropTypes.object,
    projects: PropTypes.object,
  }).isRequired,
};

Header.defaultProps = {
  currentSection: null,
};

export default Header;
