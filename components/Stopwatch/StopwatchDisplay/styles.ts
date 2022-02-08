import styled from "styled-components";

export const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

export const Digit = styled.span`
  font-size: 1.5rem;
  color: #f5f5f5;
`;

export const ColoredDigit = styled(Digit)`
  color: #ee3769;
`;
