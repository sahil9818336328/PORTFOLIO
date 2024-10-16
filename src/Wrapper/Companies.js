import styled from 'styled-components'

const StyledCompaniesWrapper = styled.section`
  margin-top: 8rem;
  padding: 8rem 0;
  border-top: 1px solid var(--grey-300);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .info {
      text-align: center;
      text-transform: none;
      font-size: 2rem;
      color: #141c3a;
      letter-spacing: var(--letter-spacing);
      line-height: 1.2;

      @media screen and (max-width: 675px) {
        font-size: 1.5rem;
      }
    }

    .company {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .fnp-img {
        width: 350px;
        margin-bottom: -1rem;
      }

      img {
        @media screen and (max-width: 300px) {
          width: 150px;
        }
      }

      .btn {
        @media screen and (max-width: 400px) {
          padding: 0.5rem 1rem;
        }
      }

      .description {
        margin-top: 1rem;
        margin-bottom: 2rem;
        color: var(--grey-400);
        text-align: center;
        letter-spacing: var(--letter-spacing);
        line-height: 1.2;
      }
    }
  }
`

export default StyledCompaniesWrapper
