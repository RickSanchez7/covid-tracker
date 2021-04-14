import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 990px) {
    height: 400px;
  }
`;
