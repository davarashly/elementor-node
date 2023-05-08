import styled from "styled-components"

const StyledNavbar = styled.nav`
  .nav-link {
    width: 100%;
    text-align: center;

    &.active {
      pointer-events: none;
    }
  }
`

export default StyledNavbar
