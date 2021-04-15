import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
  height: 52rem;
  background-color: white;
  padding: ${({ theme }) => theme.size.xsm};
  border-radius: ${({ theme }) => theme.size.xsm};
  margin-top: ${({ theme }) => theme.size.lg};
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
`;
