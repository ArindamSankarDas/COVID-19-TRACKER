import styled from "styled-components";

export const MapDiv = styled.div`
  height: 82.8vh;
  background-color: white;
  padding: 1rem;
  border-radius: 1.1rem;
  margin: 1.5rem 0;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  .leaflet-container {
    height: 100%;
  }

  @media (max-width: 800px) {
    height: 60vh;
  }
`;

export const InfoContainer = styled.div`
  width: 10rem;
  font-size: 0.8rem;

  h1 {
    font-size: 0.8rem;
    color: #555;
    font-weight: bold;
  }
`;

export const FlagImage = styled.div`
  width: 100%;
  height: 15vh;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 0.8rem;
  }
`;
