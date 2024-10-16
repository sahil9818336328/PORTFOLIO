import styled from 'styled-components'

const StyledContactWrapper = styled.div`
  border-top: 1px solid var(--grey-200);
  margin-top: 3rem;
  display: grid;
  place-items: center;

  @media screen and (max-width: 950px) {
    margin-top: 0;
  }

  > div {
    margin-top: -6rem;
    canvas {
      border-radius: 1rem;
    }
  }

  .avatar {
    margin-top: -6rem;

    @media screen and (max-width: 950px) {
      display: none;
    }
  }

  h4 {
    margin-top: 1rem;
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: var(--grey-400);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    line-height: 1.2;

    @media screen and (max-width: 950px) {
      margin: 5rem 1rem;
    }

    @media screen and (max-width: 675px) {
      font-size: 1rem;
    }

    .hand-shake {
      @media screen and (max-width: 520px) {
        display: none;
      }
    }
  }

  .form {
    .submit {
      padding: 0.5rem 1.5rem;
      width: fit-content;
      align-self: center;
      margin-top: 0.7rem;

      @media screen and (max-width: 520px) {
        padding: 0.4rem 1.2rem;
        font-size: 0.9rem;
      }
    }
  }
`

export default StyledContactWrapper
