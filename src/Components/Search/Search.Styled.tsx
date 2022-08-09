import styled from 'styled-components';

export const FormInputContainer = styled.div
    `
      display: flex;
      justify-content: center;
      margin: 1rem 0;
    `;

export const InputContainer = styled.input
    `
      background: transparent;
      border-radius: .5rem;
      border: .15rem solid rgb(75, 85, 99);
      font-size: 1rem;
      max-width: 45rem;
      outline: none;
      padding: 1rem;
      width: 100%;

      &::placeholder
      {
        color: rgb(75, 85, 99);
      }
    `;
