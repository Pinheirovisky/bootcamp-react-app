import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;

  .login {
    &__form {
      width: 768px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-weight: 600;
        font-size: 16px;
        color: #0074c0;
        font-family: Inter;
        text-align: start;
      }

      form {
        width: 480px;
        display: flex;
        gap: 16px;
        flex-direction: column;
      }

      &__links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        a {
          font-weight: normal;
          font-size: 14px;
          color: #596073;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &__fundo {
      width: 100%;
      max-width: 773px;
      height: 100vh;

      &__img {
        background-image: url("/assets/img/fundo.png");
        height: 100%;
        width: 100%;
        max-width: 773px;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }
`;

export default Wrapper;
