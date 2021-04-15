import { Card, Typography, CardContent } from '@material-ui/core';
import { FaCog } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const StyledCard = styled(Card)`
  flex: 1;
  cursor: pointer;
  border-top: ${({ active }) => active && '10px solid greenyellow'};
  border-color: ${({ isred }) => isred && 'red'};
  border-color: ${({ isgrey }) => isgrey && 'grey'};
  :not(:last-of-type) {
    margin-right: 15px;
  }
  @media (max-width: 990px) {
    :not(:last-of-type) {
      margin-right: unset;
    }
    margin-bottom: ${({ theme }) => theme.size.sm};
    border-top: ${({ active }) => active && '5px solid greenyellow'};
    border-color: ${({ isred }) => isred && 'red'};
    border-color: ${({ isgrey }) => isgrey && 'grey'};
  }
`;

export const StyledCardContent = styled(CardContent)`
  @media (max-width: 990px) {
    text-align: center;
    padding: ${({ theme }) => theme.size.xxsm} !important;
    padding-bottom: ${({ theme }) => theme.size.xxsm} !important;
  }
`;

export const MyTypography = styled(Typography)`
  color: ${({ total, theme }) => total && theme.colors.grey};
  font-weight: ${({ total }) => total && '600'} !important;
  font-size: ${({ total, theme }) =>
    total ? theme.size.md : theme.size.sm} !important;
`;

export const NumberOfCases = styled.h2`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
  font-size: ${({ theme }) => theme.size.xl};
  margin-bottom: ${({ theme }) => theme.size.xxsm};
  color: ${({ isred }) => !isred && 'lightgreen'};
  color: ${({ isgrey }) => isgrey && 'grey'};
`;

const rotating = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(720deg);
    -moz-transform: rotate(720deg);
    -webkit-transform: rotate(720deg);
    -o-transform: rotate(720deg);
    transform: rotate(720deg);
  }
`;

export const MyFaCog = styled(FaCog)`
  -webkit-animation: ${rotating} 4s linear infinite;
  -moz-animation: ${rotating} 4s linear infinite;
  -ms-animation: ${rotating} 4s linear infinite;
  -o-animation: ${rotating} 4s linear infinite;
  animation: ${rotating} 4s linear infinite;
`;
