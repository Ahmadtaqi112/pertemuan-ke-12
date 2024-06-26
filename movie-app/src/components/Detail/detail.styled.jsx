import styled from "styled-components";

const StyledDetailMovie = styled.div`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  text-align: center;

  .detailMovie__left {
    margin-bottom: 1rem;
  }

  .detailMovie__title {
    margin-bottom: 0.5rem;
  }

  .detailMovie__genre {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .detailMovie__description {
    margin-bottom: 2.5rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    margin: 2 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .detailMovie__left {
      flex-basis: 45%;
    }

    .detailMovie__right {
      flex-basis: 55%;
      text-align: right;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    margin: 2rem -1rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .detailMovie__left {
      flex-basis: 45%;
    }

    .detailMovie__right {
      flex-basis: 55%;
      text-align: right;
    }

    .detailMovie__genre {
      font-size: 1.3rem;
    }
  }
`;

export default StyledDetailMovie;
