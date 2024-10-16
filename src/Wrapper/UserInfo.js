import styled from 'styled-components'

const StyledSkillsWrapper = styled.section`
  margin-top: 0.5rem;
  background-color: var(--primary-500);
  padding-top: 10rem;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    margin: 0 1rem;

    .carousel {
      margin-top: 3rem;
      max-width: 65vw;

      .slick-list {
        h3 {
          text-align: center;
          line-height: 1.2;
          letter-spacing: 2px;
        }
      }

      .slick-dots {
        bottom: -5rem;
      }
    }

    h4 {
      letter-spacing: 2px;
      font-size: 2rem;
      text-align: center;
      line-height: 1.2;

      @media screen and (max-width: 675px) {
        font-size: 1.5rem;
      }
    }

    p {
      margin-top: 3rem;
      font-size: 1.2rem;
      line-height: 1.5;
      letter-spacing: 2px;
      word-wrap: break-word;

      @media screen and (max-width: 675px) {
        font-size: 1rem;
      }
    }
  }

  .services {
    position: relative;
    bottom: -15rem;
    margin: 0 auto;
    display: grid;
    max-width: 1550px;
    width: 90vw;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--white);
    border-radius: var(--border-radius);

    @media screen and (max-width: 1150px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 675px) {
      bottom: -10rem;
    }

    .service {
      padding: 5rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: var(--border-radius);
      border: 1px solid var(--grey-300);

      @media screen and (max-width: 675px) {
        padding: 3rem 1.5rem;
      }

      .animate-icon {
        @media screen and (max-width: 400px) {
          width: 50px !important;
          height: 50px !important;
        }
      }

      .title {
        margin: 2rem 0;
        text-transform: capitalize;
        font-size: 1.2rem;
        font-weight: 600;

        @media screen and (max-width: 400px) {
          font-weight: 500;
        }
      }

      .description {
        letter-spacing: var(--letter-spacing);
        line-height: 1.5;
        text-align: center;
      }

      .languages {
        text-align: center;
        h4 {
          color: var(--primary-500);
          font-weight: 500;
          margin: 2rem 0;
        }
        p {
          margin: 1rem 0;
          font-size: 1.1rem;
        }
      }
    }

    .service-one {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .service-two {
      border-left-width: 0;
      border-radius: 0;
    }

    .service-three {
      border-left-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      .title {
        text-transform: none;
      }
    }

    @media screen and (max-width: 1150px) {
      .service-one {
        border-top-right-radius: var(--border-radius);
        border-bottom-left-radius: 0;
        border-bottom: 0;
      }

      .service-two {
        border-bottom: 0;
      }

      .service-three {
        border-top-right-radius: 0;
        border-left-width: 1px;
        border-bottom-left-radius: var(--border-radius);
      }
    }
  }
`

export default StyledSkillsWrapper
