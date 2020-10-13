import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DiceSelectorProps {}

const StyledDiceSelector = styled.div`
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const DiceSelector = (props: DiceSelectorProps) => {
  return (
    <StyledDiceSelector>
      Dice
    </StyledDiceSelector>
  );
};

export default DiceSelector;
