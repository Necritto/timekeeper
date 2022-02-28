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
  color: var(--white);
`;

export const ColoredDigit = styled(Digit)`
  color: var(--red);
`;
