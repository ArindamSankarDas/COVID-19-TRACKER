import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardContainer = styled(Card)`
  flex: 1;
  cursor: pointer;
  border-bottom: ${({ active, isRed }) =>
    active ? (isRed ? "10px solid red" : "10px solid greenyellow") : null};

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    display: inline-block;
    color: ${({ isRed }) => (isRed ? "red" : "greenyellow")};
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
    margin-left: 0.8rem;
    font-weight: 600;
  }
  p:last-child {
    color: #6c757d;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 15px;
  }

  @media (max-width: 566px) {
    text-align: center;
    h2 {
      margin-left: 0;
    }
  }
`;
