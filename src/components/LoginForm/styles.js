import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin: 0 auto;
  gap: 22px;
  padding: 22px;
  background-color: var(--color-gray-3);

  h3 {
    align-self: center;
    padding-top: 14px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  label {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-gray-0);
    margin-top: 6px;
  }

  span {
    position: relative;
  }

  input {
    height: 48px;
    border-radius: 0.4rem;
    padding-left: 1.6rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-gray-0);
    background-color: var(--color-gray-2);
    width: 100%;
  }

  .EyeIcon {
    width: 15px;
    position: absolute;
    right: 20px;
    top: 19px;
    cursor: pointer;
  }

  p {
    align-self: center;
    font-size: 1.2rem;
    color: var(--color-gray-1);
    font-weight: 600;
    margin: 12px 0px;
  }
`;
