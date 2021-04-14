import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-y: scroll;
  height: 450px;
  margin-top: 20px;

  @media screen and (max-width: 990px) {
    height: 350px;
  }
`;

export const StyledTable = styled.table`
  color: #6a5d5d;
  background-color: white;
  width: 100%;
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  :nth-of-type(odd) {
    background-color: #f3f2f8;
  }
`;

export const StyledTd = styled.td`
  padding: 0.5rem 0.75rem;
`;
