import React from 'react';

import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { PlayerMenu } from './PlayerMenu';

/* eslint-disable-next-line */
export interface PlayerSelectorProps {}

const dummyPlayers = [
  {
    name: 'Walter',
    class: 'Warlock',
  },
  {
    name: 'Battle Cat',
    class: 'Sabertooth Badass',
  },
];

export const PlayerSelector = (props: PlayerSelectorProps) => {
  const menu = <PlayerMenu players={dummyPlayers} />;
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Select Player <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default PlayerSelector;
