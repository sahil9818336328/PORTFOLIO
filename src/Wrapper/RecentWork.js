import styled from 'styled-components'

const StyledRecentWorkWrapper = styled.section`
  margin-top: 25rem;
  text-align: center;

  @media screen and (max-width: 675px) {
    margin-top: 20rem;
  }

  .title {
    font-size: 2rem;
    color: #141c3a;
    letter-spacing: var(--letter-spacing);

    @media screen and (max-width: 675px) {
      font-size: 1.5rem;
    }
  }

  .info {
    margin: 2rem 0;
    font-size: 1.2rem;
    color: var(--grey-500);
    letter-spacing: var(--letter-spacing);
    line-height: 1.2;

    @media screen and (max-width: 675px) {
      font-size: 1rem;
    }
  }

  .projects {
    margin-top: 7rem;
    margin-bottom: 3rem;

    .project {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      padding-bottom: 3rem;
      margin-bottom: 3rem;

      @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;
      }

      .project-section-left {
        img {
          width: 100%;
          height: 220px;

          @media screen and (max-width: 950px) {
            display: none;
          }
        }
      }

      .project-section-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media screen and (max-width: 950px) {
          align-items: center;
        }

        .project-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
          font-size: 1.5rem;
          color: #141c3a;

          @media screen and (max-width: 675px) {
            font-weight: 400;
          }

          div {
            background-color: var(--primary-500);
            color: var(--white);
            border-radius: 0.3rem;
            padding: 0.3rem 0.5rem;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
          }
        }

        .info {
          color: var(--grey-500);
          line-height: 1.3;
          text-align: left;
          letter-spacing: 1.5px;

          @media screen and (max-width: 950px) {
            text-align: center;
          }
        }

        .stack {
          color: var(--grey-500);
          letter-spacing: var(--letter-spacing);

          span {
            color: var(--primary-500);
          }
        }

        .btn-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;

          @media screen and (max-width: 400px) {
            flex-direction: column;
          }

          .disabled {
            cursor: not-allowed;
            opacity: 0.5;
            pointer-events: none;
          }

          .btn-1 {
            background-color: var(--primary-500);
            color: var(--white);
          }
        }
      }
    }

    .linkedin {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      margin: 0 auto;
      margin-top: 5rem;
      text-transform: none;

      @media screen and (max-width: 400px) {
        margin-top: 3rem;
      }
      @media screen and (max-width: 300px) {
        padding: 0.5rem 1rem;
      }

      span {
        display: inherit;
      }
    }
  }
`

export default StyledRecentWorkWrapper
