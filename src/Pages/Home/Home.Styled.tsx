import styled from 'styled-components';

export const HomeHeaderContainer = styled.header
    `
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      max-width: 55rem;
      text-align: center;
      width: 100%;
    `;

export const HomeHeaderTitleContainer = styled.h1
    `
      font-size: 3.5rem;
    `

export const HomeBodyContainer = styled.div
    `
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
      align-content: start;
    `;
