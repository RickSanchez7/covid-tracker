import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 150px;
`;

export const InfoFlag = styled.div`
  height: 80px;
  width: 100%;
  background-size: cover;
  border-radius: 8px;
  background-image: ${({ flag }) => flag};
`;

export const InfoTitle = styled.span`
  font-weight: bold;
`;

export const InfoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-top: 5px;

  @media (max-width: 990px) {
    font-size: 18px;
  }
`;

export const Info = styled.div`
  font-size: 16px;
  margin-top: 5px;

  @media (max-width: 990px) {
    font-size: 12px;
  }
`;
