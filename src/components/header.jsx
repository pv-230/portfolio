import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--dark-gray-bg-color);
  gap: 20px;
  position: fixed;
  top: 0;
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
  color: var(--light-font-color);
  text-decoration: none;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  &:focus {
    outline: 1px solid var(--gold);
  }

  &:focus,
  &:hover {
    color: var(--gold);
    border-bottom: 5px solid var(--gold);
  }
`;

const ThemeButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: 1px solid var(--gold);
  }
`;

//-------------------------------------------------------------------------------------------------

function Header() {
  return (
    <StyledHeader>
      <NavList>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavList>
      <ThemeButton type="button" title="Toggle theme">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="gold"
            d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"
          />
        </svg>
      </ThemeButton>
    </StyledHeader>
  );
}

export default Header;
