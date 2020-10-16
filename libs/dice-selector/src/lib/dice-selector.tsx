import React from 'react';
import styled from '@emotion/styled';

import Dice from './dice';

/* eslint-disable-next-line */
export interface DiceSelectorProps {}

const StyledDiceSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25vw;
`;

export const DiceSelector = (props: DiceSelectorProps) => {
  return (
    <StyledDiceSelector>
      <Dice numberOfFaces={100} />
      <Dice numberOfFaces={20} />
      <Dice numberOfFaces={12} />
      <Dice numberOfFaces={8} />
      <Dice numberOfFaces={4} />
    </StyledDiceSelector>
  );
};

export default DiceSelector;
