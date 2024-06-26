import styled, { css } from "styled-components";

const Image = styled.img`
  /* Rounded */
  ${function (props) {
    return (
      props.rounded &&
      css`
        max-width: 100%;
        height: auto;
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        @media (min-width: 992px) {
          max-width: 80%;
        }
      `
    );
  }}

  /* Rounded Circle */
  ${function (props) {
    return (
      props.roundedCircle &&
      css`
        max-width: 100%;
        height: auto;
        border-radius: 100%;

        @media (min-width: 992px) {
          max-width: 80%;
        }
      `
    );
  }}

  /* Thumbnail */
  ${function (props) {
    return (
      props.thumbnail &&
      css`
        max-width: 100%;
        height: auto;
        border-radius: 0.3rem;
        border: 0.2rem solid ${function (props) {
            if (props.borderColor) {
              return props.theme.colors[props.borderColor].main;
            } else {
              return props.theme.colors.dark.main;
            }
          }};

        @media (min-width: 992px) {
          max-width: 80%;
        }
      `
    );
  }}
`;

export default Image;
