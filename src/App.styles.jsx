import styled from 'styled-components';
import { Card, FormControl, MenuItem, Select } from '@material-ui/core';

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.size.xl};

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.size.xl};
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
  font-size: ${({ theme }) => theme.size.xxxl};
  @media (max-width: 990px) {
    margin-bottom: ${({ theme }) => theme.size.xsm};
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.size.lg};
`;

export const AppRightContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  @media (max-width: 990px) {
    margin-top: ${({ theme }) => theme.size.sm};
  }
`;

export const StyledFormControl = styled(FormControl)`
  background: ${({ theme }) => theme.colors.white};
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: ${({ theme }) => theme.size.md} !important;
`;

export const StyledSelect = styled(Select)`
  font-size: ${({ theme }) => theme.size.md} !important;
`;

export const AppGraphTitle = styled.h3`
  margin-top: ${({ theme }) => theme.size.xl};
  margin-bottom: ${({ theme }) => theme.size.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.size.lg};
`;

export const AppGraph = styled.div`
  flex-grow: 1;
`;
