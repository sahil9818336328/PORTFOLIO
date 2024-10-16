import styled from 'styled-components'

const StyledFooterWrapper = styled.footer`
  background-color: var(--primary-500);
  color: var(--white);
  margin-top: 3rem;

  .contact {
    position: relative;
    top: -4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    background-color: #141c3a;
    padding: 4rem;
    border-radius: 1rem;
    max-width: 1350px;
    width: 90vw;

    @media screen and (max-width: 1090px) {
      flex-direction: column;
    }

    @media screen and (max-width: 675px) {
      gap: 3rem;
    }

    span {
      white-space: nowrap;
      font-size: 1.5rem;
      font-weight: 500;

      @media screen and (max-width: 675px) {
        font-size: 1.2rem;
      }
    }

    p {
      letter-spacing: var(--letter-spacing);
      line-height: 1.2;
      text-align: center;
    }

    .btn {
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 2px solid #ffffff;
      color: #ffffff;
      background-color: transparent;
      padding: 0.9rem 2.5rem;
      font-weight: 500;
      border-radius: 3rem;
      text-transform: none;

      @media screen and (max-width: 675px) {
        padding: 0.9rem 2rem;
      }

      @media screen and (max-width: 400px) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }

      svg {
        font-size: 1.3rem;

        font-size: 1rem;
      }

      &:hover {
        background-color: #ffffff;
        color: #141c3a;
        border-color: #141c3a;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0;

    .footer-logo {
      margin: 2rem 0;
      font-size: 2rem;

      @media screen and (max-width: 675px) {
        font-size: 1.5rem;
      }
    }
    .footer-title {
      font-size: 1.5rem;
      color: var(--grey-300);
      text-align: center;
      line-height: 1.2;
      letter-spacing: var(--letter-spacing);

      @media screen and (max-width: 675px) {
        font-size: 1.2rem;
      }
    }
    .social-links {
      margin: 3rem 0;
      display: flex;
      align-items: center;
      gap: 1.6rem;

      @media screen and (max-width: 950px) {
        flex-wrap: wrap;
        gap: 0.8rem;
        justify-content: center;
      }

      .social-icon {
        color: var(--white);
        border: 2px solid var(--white);
        border-radius: 50%;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 51px;
        height: 50px;
        font-size: 1.2rem;
        transition: var(--transition);

        @media screen and (max-width: 950px) {
          width: 45px;
          height: 45px;
        }

        &:hover {
          background-color: var(--white);
          color: var(--primary-500);
        }
      }
    }

    .footer-end {
      color: var(--grey-300);
      gap: 0.4rem;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        display: flex;
        align-items: center;
        letter-spacing: var(--letter-spacing);
        line-height: 1.2;

        @media screen and (max-width: 950px) {
          text-align: center;
        }
      }

      .made-with {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        font-size: 0.7rem;
        font-weight: 700;

        svg {
          margin: 0 0.5rem;
          font-size: 3rem;
        }
      }
    }
  }
`

export default StyledFooterWrapper
