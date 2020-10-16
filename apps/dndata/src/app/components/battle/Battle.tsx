import React from 'react';

import { DiceSelector } from '@dndata/dice-selector';
import { PlayerSelector } from '@dndata/player-selector';

export const BattleInput = () => {
  return (
    <>
      <h1>Battle Input</h1>
      <DiceSelector />
      <PlayerSelector />
    </>
  );
};

export default BattleInput;
