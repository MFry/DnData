import React from 'react';

import styled from '@emotion/styled';

interface DiceProps {
  numberOfFaces: number;
}

const StyledDice = styled.div`
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

/**
 * Selectable dice for specifying what roll took place
 * TODO: Make clickable
 */
export const Dice = (props: DiceProps) => {
  return <StyledDice>{props.numberOfFaces}</StyledDice>;
};

export type { DiceProps };
export default Dice;
