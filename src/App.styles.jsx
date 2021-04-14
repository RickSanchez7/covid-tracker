import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const AppLeftContainer = styled.div`
  flex: 0.9;
`;
export const AppStats = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const AppRightContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const AppGraphTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AppGraph = styled.div`
  flex-grow: 1;
`;
