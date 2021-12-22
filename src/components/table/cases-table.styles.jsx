import styled from "styled-components";

export const CountriesTable = styled.div`
  margin: 1.2rem 0;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 50vh;
  color: #6a5d5d;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  tr:nth-child(odd) {
    background-color: #f3f2f8;
  }

  @media (max-width: 990px) {
    td {
      padding: 0.5rem;
    }
  }
`;
