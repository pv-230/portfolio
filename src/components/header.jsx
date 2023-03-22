import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--dark-20);
  gap: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
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
  color: var(--light-90);
  text-decoration: none;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  &:focus-visible {
    outline: 1px solid var(--gold);
  }

  &:focus-visible,
  &:hover {
    color: var(--gold);
    border-bottom: 5px solid var(--gold);
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
    </StyledHeader>
  );
}

export default Header;
