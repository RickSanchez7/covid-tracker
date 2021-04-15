import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-y: scroll;
  height: 45rem;
  margin-top: ${({ theme }) => theme.size.md};

  @media screen and (max-width: 990px) {
    height: 35rem;
  }
`;

export const StyledTable = styled.table`
  color: ${({ theme }) => theme.colors.grey};
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
  font-size: ${({ theme }) => theme.size.sm};
`;
