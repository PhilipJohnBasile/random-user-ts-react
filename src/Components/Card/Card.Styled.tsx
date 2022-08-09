import styled from 'styled-components';

export const CardContainer = styled.div
    `
      flex: 0 0 auto;
      margin: 20px;
      padding: 12px;
      background: linear-gradient(to bottom, #416efe 0%, #416efe 27.5%, #fff 27.5%, #fff 100%);
      font-size: 10px;
      text-align: center;
      width: 200px;
    `;

export const CardDetailsContainer = styled.div
    `
      & svg {
      }
    `;

export const CardDetailsImageContainer = styled.img
    `
      border-radius: 100%;
      border: 4px solid #fff;
      box-shadow: 0 0 13px 2px rgba(0,0,0,0.35);
      -webkit-box-shadow: 0 0 13px 2px rgba(0,0,0,0.35);
      -moz-box-shadow: 0 0 13px 2px rgba(0,0,0,0.35);
    `;

export const CardDetailsParagraphContainer = styled.p
    ` 
    `;

export const CardDetailsSpanContainer = styled.span
    `
      color: #666;
      &.name {
      }
    `;
