import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 15rem;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoFlag = styled.div`
  height: 10rem;
  width: 100%;
  background-size: cover;
  border-radius: 8px;
  background-image: ${({ flag }) => flag};
`;

export const InfoTitle = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.md};
`;

export const InfoName = styled.div`
  font-size: ${({ theme }) => theme.size.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey_2};
  margin-top: ${({ theme }) => theme.size.xxsm};
`;

export const Info = styled.div`
  font-size: ${({ theme }) => theme.size.sm};
  margin-top: ${({ theme }) => theme.size.xxsm};
`;
