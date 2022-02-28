import styled from "styled-components";

export const ProjectWrapper = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  max-height: 65vh;
  overflow-x: hidden;
  overflow-y: auto;
  grid-gap: 24px;
  padding: 0;
  margin: 24px 0 calc(24px + 1em);
  list-style: none;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
