import styled from "styled-components";

export const ProjectItem = styled.li`
  height: 60px;
  width: 100%;
  max-width: 49%;
  background: #6a7989;
  padding: 12px 24px;
  border-radius: 12px;
  counter-increment: number;
  position: relative;

  &::before {
    content: counter(number) ") ";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    font-weight: 500;
  }
`;

export const ProjectTitle = styled.span`
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  max-width: 250px;
  padding-left: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &::first-letter {
    text-transform: uppercase;
  }
`;
