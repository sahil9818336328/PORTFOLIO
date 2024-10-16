import styled from 'styled-components'

const StyledNavbarWrapper = styled.nav`
  padding: 1rem 0;

  .navbar {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      text-transform: uppercase;
      color: var(--primary-500);
      font-size: 1.5rem;

      @media screen and (max-width: 675px) {
        font-size: 1rem;
      }
    }

    .nav-section-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      @media screen and (max-width: 950px) {
        display: none;
      }
    }

    @media screen and (min-width: 951px) {
      .hamburger-react {
        display: none;
      }
    }

    .close-icon {
      font-size: 1.2rem;
    }
  }
`

export default StyledNavbarWrapper
