import React from 'react';

import {
  StyledCard,
  MyTypography,
  NumberOfCases,
  MyFaCog,
  StyledCardContent,
} from './InfoBox.styles';

const InfoBox = ({ title, isred, isgrey, active, cases, total, ...props }) => (
  <StyledCard
    onClick={props.onClick}
    active={active ? 1 : 0}
    isred={isred ? 1 : 0}
    isgrey={isgrey ? 1 : 0}
  >
    <StyledCardContent>
      {/* Title */}
      <MyTypography total="true">{title}</MyTypography>

      {/* Number of Cases */}
      <NumberOfCases isred={isred ? 1 : 0} isgrey={isgrey ? 1 : 0}>
        {props.isloading ? <MyFaCog /> : cases}
      </NumberOfCases>

      {/* Total Cases */}
      <MyTypography color="textSecondary">{total} Total</MyTypography>
    </StyledCardContent>
  </StyledCard>
);

export default InfoBox;
