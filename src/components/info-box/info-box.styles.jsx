import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardContainer = styled(Card)`
  flex: 1;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    color: #cc1034;
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p:last-child {
    color: #6c757d;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 15px;
  }
`;
