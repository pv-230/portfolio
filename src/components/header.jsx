import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: red;
  gap: 20px;
  position: fixed;
  top: 0;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 1.2rem;
`;

const ThemeButton = styled.button`
  width: 32px;
  height: 32px;
`;

//-------------------------------------------------------------------------------------------------

function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavList>
          <li>
            <NavLink href="#about">About</NavLink>
          </li>
          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </NavList>
      </nav>
      <ThemeButton type="button" />
    </StyledHeader>
  );
}

export default Header;
