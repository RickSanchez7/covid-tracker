import React from 'react';
// import './Table.css';
import numeral from 'numeral';

import {
  StyledTable,
  TableContainer,
  StyledTd,
  StyledTr,
} from './Table.styles';

const Table = ({ countries }) => {
  return (
    <TableContainer>
      <StyledTable>
        <tbody>
          {countries.map(({ country, cases }) => (
            <StyledTr key={cases + country}>
              <StyledTd>{country}</StyledTd>
              <StyledTd>
                <strong>{numeral(cases).format('000,000')}</strong>
              </StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
